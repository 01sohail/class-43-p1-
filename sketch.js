const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;

function preload(){
towerImg = loadImage("assets/tower.png");
backgroundImg = loadImage("assets/background.gif");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4;  


     //Created objects
    tower = new Tower(150,350,160,310);
    
    ground = new Ground(0,height - 1,width*2,1);
    
    cannon = new Cannon(180,110,100,50,angle);
    
}

function draw(){
    background(0);
    image(backgroundImg,0,0,width,height);
    Engine.update(engine);
    

    //Displayed objects
    tower.display();
    ground.display();
    cannon.display();
}
