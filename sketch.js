let particles = [];
var mic;
var myFont;

function preload() {
myFont = loadFont("./assets/Bagnard.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();


}

function draw() {
  background(0);
  //testo
  textFont('Bagnard');
  textSize(30);
  textAlign(CENTER);
  text("Spread your voice!",windowWidth/2,60);
  mic.start();
  let p = new Particle();
  particles.push(p);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    if (particles[i].toDelete())
      //remove particles

      particles.splice(i, 2);


  }

}

class Particle {

  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    var ciao = mic.getLevel();
    this.vx = random(-ciao,ciao);
    this.vy = random(-ciao,ciao);
    this.alpha = 255;
  }

  toDelete() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx*5;
    this.y += this.vy*5;
    this.alpha -= 5;

  }

  show() {
    noStroke();
    stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 50)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
