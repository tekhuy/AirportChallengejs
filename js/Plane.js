var Plane = function() {

  this.flying = true;

};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  if (this.isFlying() === false) {
    throw new Error("You are grounded!");
  };
  this.flying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying()) {
    throw new Error("You are already flying!");
  };
  this.flying = true;
};