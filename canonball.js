class Canonball{
    constructor(x,y){
        this.r=30
        this.body=Matter.Bodies.circle(x,y,this.r,{isStatic:true})
        Matter.World.add(w,this.body)

    }
    display(){
        image(cbi,this.body.position.x,this.body.position.y,this.r,this.r)
        console.log("cbd")
    }
    shoot(){
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:30,y:-30})
        console.log(15,this.body)
    }
}