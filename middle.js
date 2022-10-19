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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function (arr) {
  let output = [];
  let middleIndex = Math.floor((arr.length / 2));

  if (arr.length <= 2) {
    return output;
    process.exit();
  }

  if (arr.length % 2 !== 0) {
    output.push(arr[middleIndex]);
  }
  if (arr.length % 2 === 0) {
    output.push(arr[middleIndex - 1], arr[middleIndex]);
  }

  return output;

};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])