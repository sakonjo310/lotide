const takeUntil = function (array, callback) {
  let output = [];
  for (item of array) {
    if (callback(item)) {
      return output;
    }
    output.push(item)
  }
  return output;
}

//or

// const takeUntil = function(array, callback) {
//   const results = [];
 
//   for (const item of array) {
    
//     const value = callback(item);
//     if (value) {
//       return results;
//     }
    
//     results.push(item);
//   }

//   return results;
// }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1, [1, 2, 5, 7, 2])