describe ("Airport", function() {
  
  var heathrow;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it("has no planes when created", function() {
    expect(heathrow.planes).toEqual([]);
  });

  it("lands a plane before parking it", function() {
    heathrow.park(plane);

    expect(plane.land).toHaveBeenCalled();
  });

  it("can park a plane", function() {
    heathrow.park(plane);

    expect(heathrow.planes).toEqual([plane]);
  });

});