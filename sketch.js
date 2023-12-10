let noiseStartX = Math.random() * 2000.0 - 1000.0;
let noiseStartY = Math.random() * 2000.0 - 1000.0;
let noiseStartZ = Math.random() * 2000.0 - 1000.0;
let noiseScale = 0.012;

let rotateNoiseX = Math.random() * 2000.0 - 1000.0;
let rotateNoiseY = Math.random() * 2000.0 - 1000.0;
let rotateNoiseScale = 0.006;

let xCount = 30;
let yCount = 60;
let r = 196;
let g = 216;
let b = 20;
let back = 180;
function setup() {
  createCanvas(600, 800);
  background(0);
}
function preload() {
  img = loadImage("bottle.png");
  img1 = loadImage("bag.png");
  img2 = loadImage("bottle2.png");
  img4 = loadImage("bag2.png");
  // img2 = loadImage("600_800.png");
}
function saveAsCanvas() { 
  save("output_canvas.png"); 
} 
function draw() {
  let c = color(r, g, b);

  // if (back < 230) {
  //   back++;
  // } else if (back == 230) {
  //   back = 100;
  // }

  background(back);
  let padding = 20;
  let rotSpeed = 1.0;

  noiseStartZ += 0.01;
  // rotateNoiseX += 0.01;

  let blockWidth = (width - 2 * padding) / xCount;
  let blockHeight = (height - 2 * padding) / yCount;

  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      let xPos = padding + x * blockWidth;
      let yPos = padding + y * blockHeight;

      let sizeRatio =
        noise(
          noiseStartX + xPos * noiseScale,
          noiseStartY + yPos * noiseScale,
          noiseStartZ
        ) * 1.5;
      xPos += ((1.0 - sizeRatio) * blockWidth) / 2;
      yPos += ((1.0 - sizeRatio) * blockHeight) / 2;

      let newWidth = blockWidth * sizeRatio;
      let newHeight = blockHeight * sizeRatio;

      let rotateAngle =
        noise(
          rotateNoiseX + xPos * rotateNoiseScale,
          rotateNoiseY + yPos * rotateNoiseScale
        ) *
          360 -
        frameCount * rotSpeed;
      push();

      translate(xPos, yPos);
      rotate(radians(rotateAngle));
      // noFill();
      // circle(0, 0, newWidth, newHeight);
      // noFill();
      // c = color(r + 4, g + 4, b + 4);
      fill(c);
      if (x % 10 == 3 || x % 10 == 4) {
        image(img, 0, 0, newWidth, newHeight + 5);
      } else if (x % 10 == 5) {
        image(img1, 0, 0, newWidth, newHeight + 5);
      } else {
        image(img4, 0, 0, newWidth, newHeight + 5);
      }
      // image(img, 0, 0, newWidth, newHeight, 0, 0, img.width, img.height, CONTAIN);

      image(img2, 5, 5, newWidth + 5, newHeight + 5);

      pop();
    }
  }
}
