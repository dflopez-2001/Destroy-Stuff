const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,70);
    box2 = new Box(920,320,50,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810, 320)
    log1 = new Log(800,245,300,30)
    box3 = new Box(700,200,50,70);
    box4 = new Box(920,200,50,70);
    pig2 = new Pig(810, 99)
    log2 = new Log(800,80,300,30)
    box5 = new Box(800,50,57,70);
    log3=new Log(745,65,150,PI/7);;
    log4=new Log(875,65,150,-PI/7);;
    bird1= new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();








    
}