var bullet,wall,thickness,speed,weight;
var bullet1, wall1;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100,200,30,10);
  bullet.shapeColor="black"
  bullet.velocityX = speed;
  bullet.weight = weight;
  bullet.velocityX = 30;
  
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("ORANGE");  
  drawSprites();
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22.83)
              
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight *speed *speed/(thickness* thickness* thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
}
function hascollided(bullet1,wall1){
bulletRightEdge = bullet1.x + bullet1.width;
wallLeftEdge=wall1.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
else{
  return false
}
} 
 

