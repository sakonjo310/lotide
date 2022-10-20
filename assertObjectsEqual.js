const checkLength = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    return true;
  }
};

const eqArrays = function (arr1, arr2) {
  if (!checkLength(arr1, arr2)) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  debugger
  let ob1Keys = Object.keys(object1);
  let ob2Keys = Object.keys(object2);

  if (ob1Keys.length !== ob2Keys.length) {
    return false;
  }

  for (let ob1Key of ob1Keys) {
    if (Array.isArray(object1[ob1Key]) && Array.isArray(object2[ob1Key])) {
      let eqArray = eqArrays(object1[ob1Key], object2[ob1Key]);
      if (eqArray) {
        continue;
      }
      return false;

    }
    if (object1[ob1Key] === object2[ob1Key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);