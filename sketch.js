var fixedrect;
var movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,100,100,);
  fixedrect.shapeColor="green";;
  fixedrect.velocityX=5
movingrect=createSprite(600,200,100,100);
movingrect.shapeColor="green";
movingrect.velocityX=-5
}
;
function draw() {
  background(255,255,255);  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 ){
      fixedrect.velocityX=fixedrect.velocityX*(-1);
      movingrect.velocityX=movingrect.velocityX*(-1);
    }

   if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      fixedrect.velocityY=fixedrect.velocityY*(-1);
      movingrect.velocityY=movingrect.velocityY*(-1);
    }

  drawSprites();
}