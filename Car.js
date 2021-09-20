class Car{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            'stiffness':1.2,
            'length':250
            
            }
        this.pointB = this.pointB;
        this.car = Constraint.create(options);
        World.add(world, this.body);
      }

      attach(body) {
           this.car.bodyA = body;
         } 
         fly() {
              this.car.bodyA = null;
             }

      display(){
        if(this.car.bodyA){
            var pointA = this.car.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("red");
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y)
            pop();
        } 
      }
    }