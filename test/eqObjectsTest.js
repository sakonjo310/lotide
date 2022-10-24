const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  const ab = { a: { z: 1 }, b: 2 };
  const ba = { b: 2, a: { z: 1 } };
  const ab2 = { a: { y: 0, z: 1 }, b: 2 };
  const ba2 = { a: { z: 1 }, b: 2 };


  it("should return true for (cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("should return false for (cd, cd2)", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("should return true for (ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false for (ab2, ba2)", () => {
    assert.strictEqual(eqObjects(ab2, ba2), false);
  });

});

