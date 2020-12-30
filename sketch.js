
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var mainGround,leftWall,rightWall,bottomWall;
var ball_sprite,ball_image,ball_body;

function preload()
{
	ball_image=loadImage("Crumpled_Ball.jpg");
	
}

function setup() {
	createCanvas(1200, 600);

	ball_sprite=createSprite(200,200,20,20);
	ball_sprite.addImage(ball_image);
	ball_sprite.scale=0.3;


	engine = Engine.create();
	world = engine.world;

	mainGround=new Ground(600,590,1200,20);
	leftWall=new Ground(700,518,30,125);
	rightWall=new Ground(1000,518,30,125);
	bottomWall=new Ground(850,565,270,30);

	var ball_options={
	
		restitution:0.6

	}

	ball_body=Bodies.circle(200,200,20,ball_options);

	World.add(world,ball_body);

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  

  fill ("brown");
  mainGround.display();
  fill("white");
  leftWall.display();
  rightWall.display();
  bottomWall.display();
  
  ellipseMode(CENTER);
  ellipse(ball_body.position.x,ball_body.position.y,20,20);

  ball_sprite.x=ball_body.position.x;
  ball_sprite.y=ball_body.position.y;
  drawSprites();
  
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball_body.body,ball_body.body.position,{x:85,y:-85});

  }//you used the papper related function in same js so any where it is conflict so share the code with me I will check and revert you accordingly on email
 
}



