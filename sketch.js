var canvas;
var music;
var CS1, CS2, CS3, CS4;
var movingrect;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingrect = createSprite(random(10,750),300,20,20);
    movingrect.shapeColor = "white";
    movingrect.velocityX = 3;
    movingrect.velocityY = 3;

    CS1 = createSprite(100,590,180,20);
    CS1.shapeColor = "red";

    CS2 = createSprite(300,590,180,20);
    CS2.shapeColor = "green";

    CS3 = createSprite(500,590,180,20);
    CS3.shapeColor = "blue";

    CS4 = createSprite(700,590,180,20);
    CS4.shapeColor = "yellow";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    movingrect.bounceOff(edges);
    if(isTouching(movingRect,CS1)){
        movingRect.shapeColor = "red";
        CS1.shapeColor = "red";
      }
     
      else{
        movingRect.shapeColor = "white";
       CS1.shapeColor = "red";
      }

    //add condition to check if box touching surface and make it box
}
drawSprites();
function isTouching(movingrect, CS1){

    if (movingRect.x - CS1.x < CS1.width/2 + movingRect.width/2
      && CS1.x - movingRect.x < CS1.width/2 + movingRect.width/2
      && movingrect.y - CS1.y < CS1.height/2 + movingrect.height/2
      && CS1.y - movingrect.y < CS1.height/2 + movingrect.height/2) {
      
  return true;
  
  }
  else {
   return false;
  }
}