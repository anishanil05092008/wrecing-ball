class Rope {
    constructor (bodyA,bodyB){
        var options={
            bodyA : bodyA,
            pointB : bodyB,
            stiffness : 1,
            length : 250
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
       
        if (this.rope.bodyA!==null){
        var a = this.rope.bodyA.position;
        var b = this.rope.pointB;

        push()
        strokeWeight(3);
        stroke("brown");
        line(b.x,b.y,a.x,a.y);
        pop();
        }
    }
}