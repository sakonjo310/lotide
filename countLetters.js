const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  str = str.replace(/ /g, '');
  let output = {};
  for (letter of str) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}

//or

// const countLetter = function(str) {
//   const results = {};

//   for (const letter of str) {
     
//     if (letter === ' ') {
//       continue; // skip and move on to the next letter
//     }
    
//     if (!results[letter]) {
//       results[letter] = 0;
//     }

//     results[letter]++;
//   }

//   return results;
// };

console.log(countLetters("lighthouse in the house"));