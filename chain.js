class Chain{
    constructor(x,y){
      var options={

        bodyA:x,
        pointB:y,
        stiffness:1,
        length:10

      }
         this.body=Matter.Constraint.create(options)
        World.add(world,this.body)

    }
    drawing(){

    line (this.body.bodyA.position.x,this.body.bodyA.position.y,
        this.body.pointB.x,this.body.pointB.y)
    }
}