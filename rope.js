class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    attach(body){
        this.Rope.bodyA = body;
    }

    fly(){
      this.Rope.bodyA=null;
    }

    display(){
        if(this.Rope.bodyA){
            var Rope = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("white");
            line(Rope.x, Rope.y, pointB.x, pointB.y);
        }
    }
    
}
