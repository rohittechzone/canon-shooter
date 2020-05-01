  
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
       console.log(angle);
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
     
    
     
    
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image2,0,0, this.width, this.height);
        pop();
      };
  }