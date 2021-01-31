var tom,tomImage,tom_collided,tom_running;
var jerry,jerryImage,jerry_collided,jerry_running;
var garden,gardenImage;

function preload() {
    //load the images here
    tomImage=loadImage("cat1.png");
    tom_running=loadAnimation("cat2.png","cat3.png");
    tom_collided=loadImage("cat4.png");
    jerryImage=loadImage("mouse1.png");
    jerry_running=loadAnimation("mouse2.png","mouse3.png");
    jerry_collided=loadImage("mouse4.png")
    gardenImage=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //creating garden
    garden=createSprite(600,700,1000,800);
    garden.addImage(gardenImage);
    garden.scale=5;

    //create tom and jerry sprites here
     tom=createSprite(600,600,40,40);
     tom.addImage(tomImage);
     tom.scale=2;

     jerry=createSprite(500,600,40,40);
     jerry.addImage(jerryImage);
     jerry.scale=2;

}

function draw() {
    text(mouseX + ','+mouseY,10,45)

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(tom.isTouching(jerry)){
         tom.addImage(tom_collided);
         jerry.addImage(jerry_collided);
     }
   
     if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addImage(tom_collided);
        tom.changeAnimation(tom_collided);
     }
 
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("cat_running",tom_running);
      tom.changeAnimation("tom_running");
  }

}
