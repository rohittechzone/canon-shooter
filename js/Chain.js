class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stisffness : 0.04,
            length : 50
        }
        this.Chain = Constraint.create(options);
        World.add(world,this.Chain);
    }
    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;
    }
}