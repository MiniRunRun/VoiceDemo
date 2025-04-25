// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("./brush.jpg");
}

function setup() {
    let cnv=createCanvas(windowWidth, windowHeight);
    cnv.position(0,0);
    cnv.style('z-index', '-2');
    cnv.style('position', 'absolute');
  createCanvas(1000, 1000);

  // Set the background black
  background(0,0,0,0);
  
  // Image mode center will center the image on the mouse, comment out to see the difference
  imageMode(CENTER);
}

function draw() {
  image(img, mouseX, mouseY, 1,100);

}

function mousePressed(){
    background(0,0,0,0);
}