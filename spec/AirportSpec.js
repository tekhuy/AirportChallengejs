describe ("Airport", function() {
  
  it("has no planes when created", function() {
    var heathrow = new Airport();
    
    expect(heathrow.planes).toEqual([]);
  });

  it("can park a plane", function() {
    var heathrow = new Airport();
    
    heathrow.park('a plane');

    expect(heathrow.planes).toEqual(['a plane']);
  });

});