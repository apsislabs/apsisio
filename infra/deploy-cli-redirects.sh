#!/usr/bin/env bash
set -euo pipefail

DISTRIBUTION_ID="E3WVG8TZYTCD"
FUNCTION_NAME="apsis-cli-redirects"
FUNCTION_FILE="$(dirname "$0")/qbo-callback-redirect.js"

# ---- Create or update the function ----

EXISTING_ETAG=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query 'ETag' --output text 2>/dev/null || echo "")

if [ -z "$EXISTING_ETAG" ]; then
  echo "Creating CloudFront function $FUNCTION_NAME..."
  RESULT=$(aws cloudfront create-function \
    --name "$FUNCTION_NAME" \
    --function-config "Comment=Apsis CLI OAuth redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$FUNCTION_FILE")
else
  echo "Updating CloudFront function $FUNCTION_NAME..."
  RESULT=$(aws cloudfront update-function \
    --name "$FUNCTION_NAME" \
    --if-match "$EXISTING_ETAG" \
    --function-config "Comment=Apsis CLI OAuth redirects,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://$FUNCTION_FILE")
fi

FUNCTION_ETAG=$(echo "$RESULT" | jq -r '.ETag')

# ---- Publish ----

echo "Publishing function..."
aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$FUNCTION_ETAG"
FUNCTION_ARN=$(aws cloudfront describe-function --name "$FUNCTION_NAME" --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo "Function ARN: $FUNCTION_ARN"

# ---- Add cache behavior for /cli/redirect/* if not already present ----

echo "Fetching distribution config..."
CONFIG=$(aws cloudfront get-distribution-config --id "$DISTRIBUTION_ID")
DIST_ETAG=$(echo "$CONFIG" | jq -r '.ETag')
DIST_CONFIG=$(echo "$CONFIG" | jq '.DistributionConfig')

# Check if a cache behavior for /cli/redirect/* already exists
EXISTING_BEHAVIOR=$(echo "$DIST_CONFIG" | jq -r '.CacheBehaviors.Items[]? | select(.PathPattern == "/cli/redirect/*") | .PathPattern')

if [ -n "$EXISTING_BEHAVIOR" ]; then
  echo "Cache behavior for /cli/redirect/* already exists — updating function association..."
  UPDATED_CONFIG=$(echo "$DIST_CONFIG" | jq --arg arn "$FUNCTION_ARN" '
    (.CacheBehaviors.Items[] | select(.PathPattern == "/cli/redirect/*") | .FunctionAssociations) = {
      "Quantity": 1,
      "Items": [{ "FunctionARN": $arn, "EventType": "viewer-request" }]
    }
  ')
else
  echo "Adding cache behavior for /cli/redirect/*..."
  # Inherit forwarding settings from the default cache behavior
  DEFAULT_CB=$(echo "$DIST_CONFIG" | jq '.DefaultCacheBehavior')
  NEW_BEHAVIOR=$(echo "$DEFAULT_CB" | jq --arg arn "$FUNCTION_ARN" '
    .PathPattern = "/cli/redirect/*" |
    .FunctionAssociations = {
      "Quantity": 1,
      "Items": [{ "FunctionARN": $arn, "EventType": "viewer-request" }]
    }
  ')
  UPDATED_CONFIG=$(echo "$DIST_CONFIG" | jq --argjson behavior "$NEW_BEHAVIOR" '
    .CacheBehaviors.Items //= [] |
    .CacheBehaviors.Items = [$behavior] + .CacheBehaviors.Items |
    .CacheBehaviors.Quantity = (.CacheBehaviors.Items | length)
  ')
fi

echo "Updating distribution $DISTRIBUTION_ID..."
aws cloudfront update-distribution \
  --id "$DISTRIBUTION_ID" \
  --if-match "$DIST_ETAG" \
  --distribution-config "$UPDATED_CONFIG"

echo "Done. Distribution update is deploying (takes ~1 min to propagate)."
