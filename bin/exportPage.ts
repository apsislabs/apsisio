#!/usr/bin/env bun
import { chromium } from "playwright";
import { spawn } from "child_process";
import { join } from "path";

const chromeExecutablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; // macOS path

const args = Bun.argv.slice(2);

let url: string | undefined;
let nodeSelector: string | undefined;
let outputFile = "output.pdf";
let margin = "1in"; // default

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--node" || args[i] === "-n") {
    nodeSelector = args[i + 1];
    i++;
  } else if (args[i] === "--output" || args[i] === "-o") {
    outputFile = args[i + 1];
    i++;
  } else if (args[i] === "--margin" || args[i] === "-m") {
    margin = args[i + 1];
    i++;
  } else if (!url) {
    url = args[i];
  }
}

if (!url || !nodeSelector) {
  console.error(
    "Usage: bun exportPage.ts <url> --node <CSS selector> [--output file.pdf] [--margin 1in]"
  );
  process.exit(1);
}

const browser = await chromium.launch({
  headless: true,
  executablePath: chromeExecutablePath,
  args: [
    "--remote-debugging-port=9222",
    "--headless=true",
    "--allow-file-access-from-files",
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
  ],
});

const page = await browser.newPage();

await page.goto(url, { waitUntil: "networkidle" });

const success = await page.evaluate((selector) => {
  const target = document.querySelector(selector);
  if (!target) return false;

  const clone = target.cloneNode(true) as HTMLElement;

  const styles = [...document.styleSheets]
    .map((sheet) => {
      try {
        return [...(sheet.cssRules ?? [])]
          .map((rule) => rule.cssText)
          .join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");

  document.head.innerHTML = `<style>
    ${styles}
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
    }
  </style>`;

  document.body.innerHTML = "";
  document.body.appendChild(clone);

  return true;
}, nodeSelector);

if (!success) {
  console.error(`Could not find node matching selector: ${nodeSelector}`);
  await browser.close();
  process.exit(1);
}

await page.pdf({
  path: outputFile,
  format: "A4",
  printBackground: false,
  displayHeaderFooter: true,
  footerTemplate: `
    <div style="
      font-size: 11px;
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      text-align: center;
      color: #ccc;
      margin: 0 auto;
    ">
      <span class="pageNumber"></span>/<span class="totalPages"></span>
    </div>
  `,
  headerTemplate: `<div></div>`, // optional: empty header
  margin: {
    top: margin,
    right: margin,
    bottom: margin,
    left: margin,
  },
});

await browser.close();
console.log(`Saved as ${outputFile}`);

// Open PDF in system viewer
function openPDF(path: string) {
  const platform = process.platform;
  if (platform === "darwin") {
    spawn("open", [path], { stdio: "inherit" });
  } else if (platform === "win32") {
    spawn("start", [path], { shell: true, stdio: "inherit" });
  } else {
    spawn("xdg-open", [path], { stdio: "inherit" });
  }
}

openPDF(join(process.cwd(), outputFile));
