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

module.exports = takeUntil;