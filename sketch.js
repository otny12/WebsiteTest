let jpg;

function preload() {
  jpg = loadImage('jpg.png');
}

function setup() {
  createCanvas(500, 500);
  image(jpg, 200, 200);

}

function draw() {
  let r;
  let g;
  let b;
  let y0;
  let rec;
  let z;
  z=0;
  if (mouseY > 325) {
    y0 = map(mouseY, 325, height, 0, 1);
    r = lerp(235, 0, y0);
    g = lerp(140, 0, y0);
    b = lerp(52, 0, y0);
  }
  if (mouseY <= 325) {
    y0 = map(mouseY, 0, 325, 0, 1);
    r = lerp(153, 235, y0);
    g = lerp(255, 140, y0);
    b = lerp(255, 52, y0);
  }
  background(r, g, b);
  for (let i = mouseY; i > 0; i-=1) {
    let gr = map(z,mouseY, 0, 0,1);
    let r1;
    let r2;
    let r3;
    r1 = lerp(r, r-150, gr);
    r2 = lerp(g, g-150, gr);
    r3 = lerp(b, b-150, gr);

    fill(r1, r2, r3);
    noStroke();
    rect(0, z, 500, 1);
    z+=1;
  }
  //jpg mover
  let x1 = map(mouseX, 0, width, 0, width, true);
  let y1 = map(mouseY, 0, height, 0, height, true);
  image(jpg, x1 - 50, y1 - 50, 100, 100);
  //roof
  fill(204, 102, 0);
  beginShape();
  vertex(300, 200);
  vertex(300, 400);
  vertex(100, 400);
  vertex(100, 200);
  endShape(CLOSE);
  fill(0, 153, 76);
  triangle(80, 200, 320, 200, 200, 150);
  fill(0, 255, 255);
  rect(250, 230, 30, 50);
  rect(250, 325, 30, 50);
  rect(125, 230, 30, 50);
  rect(125, 325, 30, 50);
  rect(190, 230, 30, 50);
  fill(153, 75, 0);
  rect(190, 325, 30, 75);
  fill(255, 222, 0, 100);
  ellipse(195, 365, 5);
  fill(24, 252, 0);
  rect(0, 400, 500, 500);

}