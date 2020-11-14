const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(400,390,800,20);
}

function draw() {
  background(255,255,255);
  ground.display();
}