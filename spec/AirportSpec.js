describe ("Airport", function() {
  
  it("has no planes when created", function() {
    heathrow = new Airport();
    
    expect(heathrow.planes).toEqual([]);
  });

});