
//to give constant to world and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to give variables to different objects
var tree;
var ground;
var boy;
var stone;
var rope;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;


function preload(){
  boy = loadImage("sprites/boy.png");
 
}


function setup(){
 //to create canvas  
	createCanvas(1300, 700);

 //to a world that is based on physics and name it as engine
	engine = Engine.create();
	world = engine.world;

 //to create bodies inside the world
  tree = new Tree(1050,320,400,550);
	ground = new Ground(width/2,600,width,20);
  stone = new Stone(235,420,50);
  rope = new Rope(stone.body,{x:235,y:420});

  mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,160,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,100,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1020,250,40);
	mango12=new Mango(970,260,40);
	
 //to command the world to start running
	Engine.run(engine);
}


function draw() {
 //to set all the objects at center 
  rectMode(CENTER);

 //to set the background color as black 
  background(0);

 //to display a text 
  textSize(25);
  text("Press space to try again",50 ,50);

 //to display an image of the boy
  image(boy ,200,340,200,300);
  

 //to display the bodies
  tree.display();
  ground.display();
  stone.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

 //to make the mango fall from the tree when stone touches the mango
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12); 
   
 //to draw the sprites 
  drawSprites();
}


//a seperate function is mouse is dragged
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}


//a seperate function if mouse dragged is released
function mouseReleased(){
  rope.fly(); 
}


//a seperate function to detect if mango and stone have collided and make the mango fall from tree
function detectCollision(stoneObj,mangoObj){
  mangoBodyPosition = mangoObj.body.position;
  stoneBodyPosition = stoneObj.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  
  if(distance<=stoneObj.body.circleRadius+mangoObj.body.circleRadius){
    Matter.Body.setStatic(mangoObj.body,false);
  }
}


//a seperate function to attach the stone to the boys hand if "space" is pressed
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    rope.attach(stone.body);
  }
}



