const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[]



function setup(){
    createCanvas(400,900);
  
  engine = Engine.create();
  world = engine.world;
  
  umbrella = new Umbrella(200,500);
  
  if(frameCount%5===0){
    for (var i=0 ; i<100 ; i++){
        drops.push(new Drops(random(0,400),random(0,700)));
        
    }
  }

}

function draw(){
    background("black");
    Engine.update(engine);
    
    

    for (var i=0 ; i<drops.length ; i++){
        drops[i].display()
        drops[i].update()    
    }
    umbrella.display();
}   

