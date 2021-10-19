class Slingao{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.shot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.shot);

    }
    fly(){
        this.shot.bodyA =null;
        
    }
    display(){
        if(this.shot.bodyA){
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("pink");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}

