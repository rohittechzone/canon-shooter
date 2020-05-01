class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.shootball = Constraint.create(options);
        World.add(world, this.shootball);
    }

    attach(body){
        gamestate = "red";
        this.shootball.bodyA = body;
    }

    shoot(){
        this.shootball.bodyA = null;
    }

    display(){
        if (this.shootball.bodyA) {
            var pointA = this.shootball.bodyA.position;
            this.pointB.x = launchX;
            this.pointB.y = launchY;
            var pointB = this.pointB;
        }
    }

}
