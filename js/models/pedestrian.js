function Pedestrian() {
  this.position = {
    x : Math.random() * width,
    y : Math.random() * height
  };
  this.velocity = {
    x: (Math.random() * 2 - 1) * v0,
    y: (Math.random() * 2 - 1)
  };
  this.velocity.y = Math.sqrt(Math.pow(v0,2)-Math.pow(this.velocity.x,2));
  this.target = {
    x : Math.random() * width,
    y : Math.random() * height
  };
}

Pedestrian.prototype.move = function () {

};
