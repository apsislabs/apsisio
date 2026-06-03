// CloudFront Function — viewer-request on /cli/redirect/*
// Redirects known CLI OAuth callbacks to localhost. Unknown paths fall through to S3.
function handler(event) {
  var request = event.request;

  var params = [];
  for (var key in request.querystring) {
    var entry = request.querystring[key];
    var values = entry.multiValue || [entry];
    for (var i = 0; i < values.length; i++) {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(values[i].value));
    }
  }
  var qs = params.length > 0 ? '?' + params.join('&') : '';

  if (request.uri === '/cli/redirect/qbo') {
    return {
      statusCode: 302,
      headers: { location: { value: 'http://localhost:8080/callback' + qs } },
    };
  }

  return request;
}
