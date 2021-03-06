class Bor_der{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':true,
            'friction':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle+19);
        fill('skyblue');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
  }