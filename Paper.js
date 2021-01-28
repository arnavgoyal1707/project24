class Paper {
    constructor() {
      var options = {
         'restitution':0.3,
         'friction':0.5,
          'density':1.2
         
      }
      this.body = Bodies.circle(110,670,18, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     rotate(angle);
      fill('white');
     circle(0,0,30);
      pop();
    }
  };