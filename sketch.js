var background, backgroundImage
var plane, planeImage
var cloud, cloudImage
var bird, birdImage

function preload() {
  backgroundImage = loadImage("images/1.png")
  planeImage = loadImage("images/plane.jpg")
  birdImage = loadImage("images/bird.jpg")
  cloudImage = loadImage("images/cloud.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
background = createSprite(width/2,height-100,width,height/4)
background.scale = 2
background.addImage(backgroundImage)
//background.velocityX = -5
plane = createSprite(300,180,200,20)
plane.addImage(planeImage)
cloud = createSprite(960,150,150,18)
cloud.scale = 0.1
cloud.addImage(cloudImage)
bird = createSprite(700,490,100,20)
bird.addImage(birdImage)
bird.scale = 0.2

}

function draw() {
 // background("white");  
  drawSprites();

  //if (background.x < 0){
    //background.x = 15000;
  //}
}