const assertEqual = function(actual, expected) {

  //Filter
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  } 
    
  //Happy Path
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};



module.exports = assertEqual;