const { createCanvas } = require("@napi-rs/canvas");

const canvas = createCanvas(300, 320);
const ctx = canvas.getContext("2d");

function measureTextSize(ctx, font, text) {
  ctx.font = font;
  const metrics = ctx.measureText(text);
  const width = metrics.width;
  const height =
    metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  return { width, height };
}

const textSize = measureTextSize(ctx, "16px Arial", "Hello, World!");

console.log(textSize.width, textSize.height);
