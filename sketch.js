const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage=loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,495,800,10);

	dustbin1 = new Ground(720,480,100,20);
	dustbin2 = new Ground(680,440,20,100);
	dustbin3 = new Ground(780,440,20,100);

	ball = new Paper(100,400,30);
	ball.debug=true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  fill("brown")
  ground.display();

  ball.display();

  fill("blue")
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  imageMode(CENTER)
  image(dustbinImage,725,415,150,150)


  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
	}
}



