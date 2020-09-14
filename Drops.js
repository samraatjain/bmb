class Drops{
    constructor(x,y,r){
        var options={
            friction: 0.1,
        }
        this.body=Bodies.circle(this.x,this.y,this.r/6,options);
        
        World.add(world,this.body);
    }
    display()

    {
        push();
        translate(this.body.position.x, this.body.position.y);
       var maxDrops=100;

       for(var i=0; i<maxDrops; i++){
           drops.push(new createDrop(random(0,400),random(0,400)));
       }
    
            
        ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
     update(rain);{
         if(this.rain.position.y > height){
             Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
         }
        
     
        pop();
    }
}
}
