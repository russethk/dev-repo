const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

describe("#unroll", function () {

  it("returns an array", function () {
    expect(Array.isArray(unroll([]))).toEqual(true);
  });

});

describe("#unroll", function () {

  it("returns an array with the correct number of elements", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ];
    expect(unroll(square).length).toEqual(8);
  });

});

describe("#unroll", function () {
  
    it("iterates over an array in a circular pattern and returns an array with the correct elements returned", function () {
      const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8]
      ];
      expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
    });
  
  });
