var invisibleFloor
var jungle, jungleImage;
var monkey, monkeyImage;
var obstracle, obstracleImage;
var banana, bananaImage;

function preload() {
  jungleImage = loadImage("jungle.jpg");
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png");
  obstracleImage = loadImage("stone.png");
  bananaImage = loadImage("banana.png", bananaImage);
}

function setup() {
  createCanvas(550, 400);
  jungle = createSprite(200, 200, 400, 400);
  jungle.addImage("Image", jungleImage);

  invisibleFloor = createSprite(180, 380, 750, 10);
  invisibleFloor.visible = false;


  monkey = createSprite(100, 340, 20, 20);
  monkey.addAnimation("Image", monkeyImage);
  monkey.scale = 0.15;
  monkey.collide(invisibleFloor);

}

function draw() {
  background(220);
  if (keyDown("space") && monkey.Y > 150) {
    monkey.velocityY = -6;
  }

  spawnFruit();
  spawnObstracle();
  drawSprites();
}

function spawnObstracle() {
  if (frameCount % 80 === 0) {
    obstracle = createSprite(580, 360, 20, 20);
    obstracle.collide(invisibleFloor);
    obstracle.addImage("stone.png", obstracleImage);
    obstracle.scale = 0.2
    obstracle.velocityX = -6;
  }

}

function spawnFruit() {
  if (frameCount % 160 === 0) {
    banana = createSprite(580, 200, 20, 20);
    banana.y = random(200, 250);
    banana.addImage("banana.png", bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -5;
  }
}