var iss, spacecraft, bg, issIMG;
var spacecraft1;
var spacecraft2;
var spacecraft3;
var spacecraft4;
var hasDocked = false; 

function preload(){
  bg = loadImage("space.jpg")
  issIMG = loadImage("iss.png")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadImage("spacecraft2.png")
  spacecraft3 = loadImage("spacecraft3.png")
  spacecraft4 = loadImage("spacecraft4.png")

}
 function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.2;
  iss = createSprite(330,130)
  iss.addImage(issIMG)
  iss.scale = 0.2;
  
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraft1)
  if(!hasDocked){
    spacecraft.x = spacecraft.x+1
  
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft4)
    spacecraft.x = spacecraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft3)
    spacecraft.x = spacecraft.x+1
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2)
  }
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!",200,300)
  }
  drawSprites();
}