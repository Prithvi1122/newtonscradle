var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var roof1,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(390,100,530,50);
	bobObject1=new Bob(250,350,70);
	bobObject3=new Bob(390,350,70);
	bobObject2=new Bob(320,350,70);
	bobObject4=new Bob(460,350,70);
	bobObject5=new Bob(520,350,70);
	rope1=new Rope(bobObject1.body,roof1.body,-140, 0)

	rope2=new Rope(bobObject2.body,roof1.body,-70, 0)
	rope3=new Rope(bobObject3.body,roof1.body,0, 0)
	rope4=new Rope(bobObject4.body,roof1.body,70, 0)
	rope5=new Rope(bobObject5.body,roof1.body,140, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:200});
  
	}
}




