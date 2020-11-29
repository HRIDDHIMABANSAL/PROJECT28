class Tree{
  constructor(x, y){
      var options= {
          isStatic: true
      }
      this.body= Bodies.rectangle(x, y, 10, 10, options);
      this.image = loadImage("sprites/tree.png");
      this.width=500;
      this.height=600;
      World.add(world,this.body);
  }

  display(){
      var pos=this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
  }
}