class Frount {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.image = loadImage("assets/frount.png");
       World.add(world, this.body);
      };
      move(){
        if(this.body.position.x < 95){
          this.body.position.x = this.body.position.x+1;
      }
      else{
        this.body.position.x = this.body.position.x;
      }

      }
      angleup(){
        this.body.angle = this.body.angle+10;
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        angleMode(DEGREES);
        console.log(angle);
        if (keyIsDown(LEFT_ARROW)) {
          angle -= 1;
          Matter.Body.setAngle(this.body, angle);
      }
      if (keyIsDown(RIGHT_ARROW)) {
          angle += 1
          Matter.Body.setAngle(this.body, angle);
      }
      push();
      rotate(angle);
        
        // Draw the tanker the way you like.
        // You could also use an image if you want a specific look
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();

      };
}