var angle = 60;


//Crear espacio de nombre para Engine
const Engine = Matter.Engine;
//Crear espacio de nombre para World
const World = Matter.World;
//Crear espacio de nombre para Bodies
const Bodies = Matter.Bodies;
//Crear espacio de nombre para Body
const Body = Matter.Body;


function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create();
  //Agregar world a engine
  world = engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  boton = createImg("flechaN.jpeg");
  boton.position(350,50);
  boton.size(50,50);
  boton.mouseClicked(vforce);
//crear un fondo
fondo = Bodies.rectangle(200,390,400,15,ground_options);
//agregarlo a world
World.add(world,fondo);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  suelo = Bodies.rectangle(100,320,100,20,ground_options);
  World.add(world,suelo);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(suelo,angle);
  push();
  translate(suelo.position.x,suelo.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 rect(fondo.position.x,fondo.position.y,400,15 );


  
  
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03})
}