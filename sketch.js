const Engine = Matter.Engine;

const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowball1,snowball2,snowball3,snowball4,snowball5;
var snow1;
 
var snows=[];

function preload(){
 snowball1=loadImage("snow1.jpg");
 snowball2=loadImage("snow2.jpg");
 snowball3=loadImage("snow3.jpg");
 }

function setup() {
  createCanvas(1200,600);
engine=Engine.create();
world=engine.world;



}

function draw() {
  background(snowball2);  

Engine.update(engine);
spawnsnow();

for (var index = 0; index < snows.length; index++) {
  snows[index].display();
  
}

  drawSprites();
}

function spawnsnow(){
  if(frameCount%50===0){
snows.push(new Snow(Math.round(random(100,1150)),10,Math.round(random(50,90)),Math.round(random(50,90))));
  }

}
