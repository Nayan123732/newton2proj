const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/4,50);
    bobObject1=new bob(width/2-100,height/2,50);
    bobObject2=new bob(width/2-50,height/2,50);
    bobObject3=new bob(width/2,height/2,50);
    bobObject4=new bob(width/2+50,height/2,50);
    bobObject5=new bob(width/2+100,height/2,50);
    //rope1=new rope(roof.body,bobObject1.body);
    //rope2=new rope(roof.body,bobObject2.body);
    //rope3=new rope(roof.body,bobObject3.body);
    // rope4=new rope(roof.body,bobObject4.body);
    // rope5=new rope(roof.body,bobObject5.body);

    


}
function draw(){
    background(255);
Engine.update(engine);
roofObject.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
// rope1.display();
// rope2.display();
// rope3.display();
// rope4.display();
// rope5.display();
}