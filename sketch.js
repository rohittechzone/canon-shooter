// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/
var world,engine;
var ground;
var angleoffrount;
var canon,shooter,shoot;
var launchX,launchY;
var gamestate = "ready";
function setup() {
    createCanvas(800,400);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,390,800,20);
    canon = new Tanker(-55,335,100,100);
    shooter = new TankerHead(-28,300,50,20);
    ball1= new Ball(300,100,25);
    ball2= new Ball(400,200,25);
    ball3= new Ball(500,150,25);
    ball4= new Ball(600,100,25);
    canonball = new CanonBall(20,20);
    shoot = new ShootBall(canonball.body, { x: shooter.body.position.x+50, y: shooter.body.position.y});
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    console.log(shooter.body.angle);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    canon.move();
    canon.display();
    canonball.display();
    shooter.move();
    shooter.display();
    shoot.display();
    if (keyIsDown(32)) {
        shoot.attach(canonball.body)
    }
    fill(255);
    strokeWeight(20);
    stroke(255);
   // line(canonball.body.position.x,canonball.body.position.y,shooter.body.position.x+50,shooter.body.position.y);
    line(canonball.body.position.x,canonball.body.position.y,launchX-100 ,launchY+30);
}


function keyReleased() {
    if(keyCode === (32)){
       gamestate = "launch";

       shoot.shoot();
       
    }
}