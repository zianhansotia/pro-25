class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);

        this.radius = 50;
    }

    display(){
        pos = this.body.position;
        angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}