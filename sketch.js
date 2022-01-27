
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
isStatic:false,
restitution:0,
friction:0,
denisity:1.2,
groundObj=new ground(width/2,670,width,20)
leftSide=new ground(1100,600,20,120)

}



ball=Bodies.circle(260,100,radius/2,ball_options,isStatic:false,restitution:0,friction:0,denisity:1.2,)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
if (keycode===UP_ARROW)


}


