const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var rain;
var umbrella;
var mu;



function preload(){
    mu = loadImage("images/mu.jpg");
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    rain = new Drops(400,0,30); 
    umbrella = new Umbrella(100,200,100);
    
    Engine.run(engine);
}

function draw(){
    background("white")
    rain.display();
    umbrella.display();
    
}   






