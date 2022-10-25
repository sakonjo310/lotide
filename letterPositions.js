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

module.exports = letterPositions;