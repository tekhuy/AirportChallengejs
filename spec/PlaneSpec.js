describe ("Plane", function() {

  it("is flying when created", function() {
    var plane = new Plane();

    expect(plane.isFlying()).toBe(true);
  });

  it("can land", function() {
    var plane = new Plane();
    plane.land();

    expect(plane.isFlying()).toBe(false)
  });

});