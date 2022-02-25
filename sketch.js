
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ball
 var radius=40
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_option={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(260,100,radius/2,ball_option)
  World.add(world,ball)
  
paper=new Paper(100,600,10)

ground=new Ground(400,680,800,20)

leftSide= new Dustbin(550,620,20,100)
bottom= new Dustbin(610,660,100,20)
rightSide= new Dustbin(670,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
ellipse(ball.position.x,ball.position.y,radius,radius)
  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



