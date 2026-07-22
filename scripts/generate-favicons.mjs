import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const portfolioRoot = path.resolve(scriptDirectory, "..");
const webPublisherRoot = path.resolve(portfolioRoot, "..", "web-publisher-works");

const projects = [
  {
    name: "portfolio",
    background: "#171717",
    foreground: "#ffffff",
    directory: path.join(portfolioRoot, "src", "app"),
    svgName: "icon.svg",
    includeFavicon: true,
  },
  {
    name: "portfolio-daisomall",
    background: "#b72a2d",
    foreground: "#ffffff",
    directory: path.join(portfolioRoot, "src", "app", "works", "daisomall"),
    svgName: "icon.svg",
    includeFavicon: false,
  },
  {
    name: "daisomall",
    background: "#b72a2d",
    foreground: "#ffffff",
    directory: path.join(webPublisherRoot, "daisomall", "public"),
  },
  {
    name: "airseoul",
    background: "#63c9bf",
    foreground: "#063f39",
    directory: path.join(webPublisherRoot, "airseoul", "public"),
  },
  {
    name: "seoul-youth-center",
    background: "#f3a354",
    foreground: "#4a2606",
    directory: path.join(
      webPublisherRoot,
      "seoul-youth-center",
      "assets",
      "icons",
    ),
  },
  {
    name: "fragfarm",
    background: "#ffffff",
    foreground: "#111111",
    directory: path.join(
      webPublisherRoot,
      "fragfarm-mobile",
      "assets",
      "icons",
    ),
  },
];

function createSvg(background, foreground) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="5" fill="${background}"/>
  <g stroke="${foreground}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25">
    <path d="M18.8 10.2c2.4-1.9 2.5-5.6.3-7.5c-2.3-2-5.8-1.3-7.1 1.4c-1.2 2.5.2 5.5 2.9 6.2c2.3.6 4.8-.7 5-2.7c.2-1.6-1.5-2.6-2.8-1.9c-1.2.7-1.2 2.4-.1 3.1"/>
    <path d="M13.1 9.2C9.3 11.8 5.2 15.5 2.6 21.8"/>
    <path d="M12.4 19.7C9.2 16.9 6 17.2 3.7 18.4c2.2 3.1 5.7 3.9 8.7 1.3Z"/>
  </g>
</svg>
`;
}

async function renderPng(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

async function renderIco(svg) {
  const sizes = [16, 32, 48];
  const images = await Promise.all(sizes.map((size) => renderPng(svg, size)));
  const headerSize = 6;
  const directorySize = sizes.length * 16;
  let imageOffset = headerSize + directorySize;
  const header = Buffer.alloc(headerSize + directorySize);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);

  images.forEach((image, index) => {
    const entryOffset = headerSize + index * 16;
    const size = sizes[index];

    header.writeUInt8(size, entryOffset);
    header.writeUInt8(size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(image.length, entryOffset + 8);
    header.writeUInt32LE(imageOffset, entryOffset + 12);
    imageOffset += image.length;
  });

  return Buffer.concat([header, ...images]);
}

for (const project of projects) {
  const svg = createSvg(project.background, project.foreground);
  const svgName = project.svgName ?? "favicon.svg";
  const appleIconName = project.svgName === "icon.svg"
    ? "apple-icon.png"
    : "apple-touch-icon.png";

  await fs.mkdir(project.directory, { recursive: true });
  await fs.writeFile(path.join(project.directory, svgName), svg, "utf8");
  await fs.writeFile(
    path.join(project.directory, appleIconName),
    await renderPng(svg, 180),
  );

  if (project.svgName === "icon.svg") {
    if (project.includeFavicon) {
      await fs.writeFile(
        path.join(project.directory, "favicon.ico"),
        await renderIco(svg),
      );
    }
    continue;
  }

  await fs.writeFile(
    path.join(project.directory, "favicon.png"),
    await renderPng(svg, 192),
  );
  await fs.writeFile(
    path.join(project.directory, "favicon.ico"),
    await renderIco(svg),
  );
}

console.log(`Generated ${projects.length} Suyeonn Bloom favicon sets.`);
