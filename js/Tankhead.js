  
class TankerHead {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true,
        
       }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image2= loadImage("assets/frount.png"); 
      World.add(world, this.body);
      };
      move(){
        if(this.body.position.x < 92){
          this.body.position.x = this.body.position.x+1;
      }
      else{
        this.body.position.x = this.body.position.x;
      }

      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        angleMode(DEGREES);
      angleoffrount = this.body.angle;
       if(this.body.position.x === 92){
        if (keyIsDown(UP_ARROW) && angle>-30) {
          angle -= 1;
          Matter.Body.setAngle(this.body, angle);
      }
      if (keyIsDown(DOWN_ARROW)&& angle>-40 && angle<15) {
          angle += 1
          Matter.Body.setAngle(this.body, angle);
      }
      
    }
    else{
        this.body.position.x = this.body.position.x;
    }
     
    
    launchX = pos.x + ((this.height + 10) * cos(angle))
    launchY = pos.y - ((this.height - 10) * sin(angle))
   if (keyIsDown(32)) {
      Matter.Body.setPosition(canonball.body, { x: launchX-500 , y: launchY-40 })
  }
  if (keyIsDown(32) && angle<-11) {
    Matter.Body.setPosition(canonball.body, { x: launchX-120, y: launchY+30 })
    
}
if (keyIsDown(32) && angle<-11 && angle>-20) {
  Matter.Body.setPosition(canonball.body, { x: launchX-100 , y: launchY-60 })
}
if (keyIsDown(32) && angle<-20 && angle>-30) {
Matter.Body.setPosition(canonball.body, { x: launchX-70 , y: launchY-80 })

}
    
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image2,0,0, this.width, this.height);
        pop();
      };
  }