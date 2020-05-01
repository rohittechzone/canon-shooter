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
var canon,shooter,con;
function setup() {
    createCanvas(800,400);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,390,800,20);
    canon = new Tanker(-55,335,100,100);
    shooter = new Frount(-25,300,50,20);
    con = new Chain(canon.body,shooter.body);
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
console.log(shooter.body.position.x);
    
    canon.move();
    canon.display();
    shooter.move();
    shooter.display();
    con.display();
    strokeWeight(5);
    line(canon.body.position.x,canon.body.position.y,shooter.body.position.x,shooter.body.position.y);
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}