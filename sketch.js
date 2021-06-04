const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,building1,building2,building3,building4,building5,building6,building7,building8,building9,building10,
building11;
var ball,rope;
 
function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
 

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,790,1200,20);
 ball = new Ball(150,600,100);
 rope = new Rope(ball.body,{x:150,y:200});
 //layer 1
 building1 = new Building(900,730,100,100);
 building2 = new Building(800,730,100,100);
 building3 = new Building(1000,730,100,100);
 building4 = new Building(1100,730,100,100);
 //layer2
 building5 = new Building(850,630,100,100);
 building6 = new Building(950,630,100,100);
 building7 = new Building(1050,630,100,100);
 //layer3
 building8 = new Building(895,530,100,100);
 building9 = new Building(995,530,100,100);
   //layer4
   building10 = new Building(945,430,100,100);
   //layer5
   building11 = new Building(945,305,30,150);
}

function draw() {
  background("lightblue");  

ground.display();
ball.display();
rope.display();
building1.display();
building2.display();
building3.display();
building4.display();
building5.display();
building6.display();
building7.display();
building8.display();
building9.display();
building10.display();
building11.display();
  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
}

function mouseReleased(){

  rope.fly();
}