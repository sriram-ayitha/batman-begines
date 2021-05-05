class Umbrella{
     constructor(x,y){
         var options={
             'isStatic':true
         }
         this.body=Bodies.circle(x,y,50,options);
         World.add(world,this.body);
         this.img=loadImage('images/WalkingFrame/walking_1.png');

        }
          
    display(){
        image(this.img,this.body.position.x,this.body.position.y+9,100,300);
    }
   
}