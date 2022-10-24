const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const checkLength = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    return true;
  }
}

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
}


const eqObjects = function (object1, object2) {
    let ob1Keys = Object.keys(object1);
    let ob2Keys = Object.keys(object2);
  
    if (ob1Keys.length !== ob2Keys.length) {
      return false;
    }
  
    for (let ob1Key of ob1Keys) {
      if (Array.isArray(object1[ob1Key]) && Array.isArray(object2[ob1Key])) {
        return eqArrays(object1[ob1Key], object2[ob1Key]);
      } else if (typeof(object1[ob1Key]) === 'object' &&  typeof(object2[ob1Key]) === 'object') {
        return eqObjects(object1[ob1Key], object2[ob1Key]);
      } else if (object1[ob1Key] === object2[ob1Key]) {
        continue;
      } else {
        return false;
      }
    }
    return true;

};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true)
assertEqual(eqObjects(cd, cd2), false)

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { b: 2, a: { z: 1 } }), true)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)

