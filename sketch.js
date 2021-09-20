const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bola;
var carro;
var predio;
var chao;
var engine, world;
function preload() {
    
}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    predio = new Building(1000,450,200,700);
    bola = new Ball(150,50,60,60);
    carro = new Car(bola.body,{x:600,y:1000});
    chao = new Ground(600,790,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    predio.display();
    bola.display();
    carro.display();
    chao.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
     
}