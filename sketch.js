
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,650,800,20);
	paper=new Paper(150,400,30);
	b1=new Bin(500,580,100,10)
    b3=new Bin(450,540,10,100)
	b2=new Bin(550,540,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  b1.display();
  b2.display();
  b3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

