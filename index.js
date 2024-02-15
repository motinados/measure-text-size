const { createCanvas } = require("@napi-rs/canvas");

const canvas = createCanvas(300, 320);
const ctx = canvas.getContext("2d");

ctx.font = "16px Arial";

const metrics = ctx.measureText("0");
const width = metrics.width;

console.log(width);
