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

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
};

//or

// const letterPositions = function(str) {

//   const results = {};

//   for (const i in str) {
//     const letter = str[i];
     
//     if (letter === ' ') {
//       continue; // skip and move on to the next letter
//     }
    
//     if (!results[letter]) {
//       results[letter] = [];
//     }

//     results[letter].push(i);
//   }

//   return results;
// };


console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);