var player, playerimg

function preload(){
playerimg = loadAnimation("Player1.png");
playerimg = loadAnimation("Player2.png");
playerimg = loadAnimation("Player3.png");
playerimg = loadAnimation("Player4.png");
player = loadAnimation("Player1.png", "Player2.png", "Player3.png", "Player4.png");
}

function setup(){   
  bgImg = loadImage("assets/bg.jpeg")

  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3 
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
