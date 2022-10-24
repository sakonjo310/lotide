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

  let result = true;

  if (!checkLength(arr1, arr2)) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      result = eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }

  return result;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)