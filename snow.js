class Snow {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            frictionAir:0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        var rand=Math.round(random(1,2));
        if (rand===1) {
            this.image = loadImage("snow5.webp");
            
        }
        else{
            this.image = loadImage("snow4.webp");
        }
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }





}