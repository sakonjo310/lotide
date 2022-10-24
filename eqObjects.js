const eqArrays = require('./eqArrays');


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


module.exports = eqObjects;

