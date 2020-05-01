class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06,
      
    }
    this.width = 15;
    this.height = 15;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
    
    this.ball_img = loadImage('assets/canonBall.png');
    World.add(world, this.body);
  };

  display(){
    if(gamestate === "launch"){
      var pos = this.body.position;

      push();
      rotate(angleoffrount);
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.ball_img,0, 0, this.width, this.height);
      pop();
   }
  };
};