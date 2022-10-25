const assert = require('chai').assert;
const map = require('../map.js');



describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it("should return [ 'g', 'c', 't', 'm', 't' ] for 'words, word => word[0]'", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  const words2 = ["lighthouse", "labs"];

  it("should return [ 'g', 'b' ] for 'words2, word => word[2]'", () => {
    assert.deepEqual(map(words2, word => word[2]), [ 'g', 'b' ]);
  });

  const numbers = [1, 2, 3, 4, 5];

  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, number => number * 2'", () => {
    assert.deepEqual(map(numbers, number => number * 2), [ 2, 4, 6, 8, 10 ]);
  });

});