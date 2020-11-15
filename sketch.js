
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var canvas;
var bob1, bob2, bob3, bob4, bob5, box, rope1, rope2, rope3, rope4, rope5;

function setup() {

	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	bob1 = new Pendulum(235,560,"white")
	bob2 = new Pendulum(320,560,"white")
	bob3 = new Pendulum(400,560,"white")
	bob4 = new Pendulum(480,560,"white")
	bob5 = new Pendulum(565,560,"white")

	rope1 = new Sling(bob1.body,{x:240,y:125})
	rope2 = new Sling(bob2.body,{x:320,y:125})
	rope3 = new Sling(bob3.body,{x:400,y:125})
	rope4 = new Sling(bob4.body,{x:480,y:125})
	rope5 = new Sling(bob5.body,{x:560,y:125})

	Engine.run(engine);
}


function draw() {

  background("black");
  
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY})
}




