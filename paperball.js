class Paper {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.8,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world,this.body)
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      ellipse(0,0,this.r,this.r);
      pop();
    
    }
}