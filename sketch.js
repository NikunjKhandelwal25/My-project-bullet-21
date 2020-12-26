var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,10)
  bullet.velocityX=speed;
  bullet.shapeColor=('White')

  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor= color(80,80,80)

}

function draw() {

  background("black");  
  


  if(hasCollide(bullet,wall)){
bullet.velocityX=0;
var Damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
if(Damage>10)
{
  bullet.shapeColor=("red")
}
if(Damage<10){
  bullet.shapeColor=color("green")

  }
  drawSprites();
}}
function hasCollide(LBullet,Lwall){
  bulletRightEdge=LBullet.x+LBullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
      return true
  }
  return false
}