
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	

	groundSprite=createSprite(400, 660, 800,10);
	groundSprite.shapeColor=color(255)

	

	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(100,635,25);
	
	ground = Bodies.rectangle(400, 660, 800, 10 , {isStatic:true} );
	World.add(world, ground);





	boxY = 620
	boxRightSprite = createSprite(635,boxY,10,50)
	boxRightSprite.shapeColor = "red";
	boxRightBody = Bodies.rectangle(635, boxY, 10,50, {isStatic: true})
	World.add(world, boxRightBody)

	
	boxLeftSprite = createSprite(525,boxY,10,50)
	boxLeftSprite.shapeColor = "red";
	boxLeftBody = Bodies.rectangle(525, boxY, 10,50, {isStatic: true})
	World.add(world, boxLeftBody)

	boxBottomSprite = createSprite(580,650,100,10)
	boxBottomSprite.shapeColor = "red";
	boxBottomBody = Bodies.rectangle(580, 650, 100,10, {isStatic: true})
	World.add(world, boxBottomBody)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
  paperObject.display();
}

function keyPressed(){

if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20, y:-15});
}

}

