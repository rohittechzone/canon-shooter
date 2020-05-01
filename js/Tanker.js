class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("assets/canon.png");
     World.add(world, this.body);
    };
    move(){
      if(this.body.position.x < 65){
        this.body.position.x = this.body.position.x+1;
    }
    else{
      this.body.position.x = this.body.position.x;
    }
      
    }
    display(){
      var pos = this.body.position;
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    };
}
