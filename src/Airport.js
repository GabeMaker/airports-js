var Airport = function() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
	plane.land();
	this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  this.planes.pop(plane);
};
