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
    process.exit();
  }

  for (let ob1Key of ob1Keys) {
    if (Array.isArray(object1[ob1Key]) && Array.isArray(object2[ob1Key])) {
      let eqArray = eqArrays(object1[ob1Key], object2[ob1Key]);
      if (eqArray) {
        continue;
      }
    }
    if (object1[ob1Key] === object2[ob1Key]) {
      continue;
    } else {
      return false;
      process.exit();
    }
  } return true;
};

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};