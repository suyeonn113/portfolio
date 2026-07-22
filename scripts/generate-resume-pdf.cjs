const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

async function main() {
  const root = path.resolve(__dirname, "..");
  const source = path.join(root, "tmp", "pdfs", "resume-build", "resume.html");
  const output = path.join(root, "output", "pdf", "조수연_웹퍼블리셔_이력서.pdf");
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ["--allow-file-access-from-files"],
  });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
  await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() => ({
    albert: document.fonts.check('16px "Albert Sans Resume"'),
    pretendard: document.fonts.check('16px "Pretendard Resume"'),
  }));
  if (!fonts.albert || !fonts.pretendard) {
    throw new Error(`Resume fonts did not load: ${JSON.stringify(fonts)}`);
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });
  await page.pdf({
    path: output,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  process.stdout.write(`${output}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
