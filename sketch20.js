var cat
var mouse 
var bgImg
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadImage("images/cat1.png")
    mouseImg1 = loadImage ("images/mouse1.png")
    catImg2 = loadImage("images/cat2.png","images/cat3.png")
    mouseImg2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadImage("images/cat4.png")
    mouseImg3 = loadImage ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,10,10);
    cat.addAnimation("cat",catImg1)
    cat.scale = 0.2
    cat.setCollider("Circle",0,0,500);
  cat.debug = false;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale = 0.15
    mouse.setCollider("Circle",0,0,470);
  mouse.debug = false;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

   if(cat.collide(mouse)){
     cat.velocityX = 0
     cat.addAnimation("catStop",catImg3)
     cat.changeAnimation("catStop")
     mouse.addAnimation("mouseStop",mouseImg3)
     mouse.changeAnimation("mouseStop")
   }
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;
    cat.addAnimation("catMoving",catImg2)
    cat.changeAnimation("catMoving")
    cat.frameDelay = 25;
    cat.velocityX = -3;
  }
 }

