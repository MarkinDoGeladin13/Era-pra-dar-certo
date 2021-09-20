class Building{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'restitution': 0.7,
            'density':0.1
        }
        
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}