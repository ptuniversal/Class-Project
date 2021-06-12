const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameengine;
var gameworld;
var ground;
var ball;
var gravity;
var bounce;

function setup() {

  createCanvas(600,400)

  gameengine = Engine.create();
  gameworld = gameengine.world;

  gravity = {
    isStatic:true
  }

  bounce={
    restitution: 0.5};
 
  ground = Bodies.rectangle(300,380,600,20,gravity)
  World.add(gameworld,ground)
  console.log(ground);

  ball = Bodies.circle(380,200,50,bounce)
  World.add(gameworld,ball);
  console.log(ball);

}

function draw() {

  background(0,260,100);  

  Engine.update(gameengine);
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,600,20)
  
  ellipseMode(RADIUS)
  circle(ball.position.x,ball.position.y,50)

}