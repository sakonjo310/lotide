const assert = require('chai').assert;
const without = require('../without');


describe ("#without", () => {

  it("should return [1, '2'] for ([1, '2', '3', 4], [2, 4, '3'])", () => {
    assert.deepEqual(without([1, "2", "3", 4], [2, 4, "3"]), [1, "2"]);
  });

  const words = ["lighthouse", "labs"];

  it("should return ['lighthouse'] for (words, ['labs'])", () => {
    assert.deepEqual(without(words, [ "labs" ]), [ "lighthouse" ]);
  });

});