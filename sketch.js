
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 
	Base= new Ground(400,680,800,10);
	leftSide=new Dustbin(465,630,20,80)
	rightSide=new Dustbin(635,630,20,80)
	bottomSide=new Dustbin(550,660,150,20)
	CrumbledPaper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  THROW ()
  CrumbledPaper.display();
 Base.display();
 leftSide.display();
bottomSide.display();
rightSide.display();


  drawSprites();
 
}
function THROW (){
if(keyDown('space')){
	Matter.Body.applyForce(CrumbledPaper.body,CrumbledPaper.body.position,{x:25,y:-21});
}
}


