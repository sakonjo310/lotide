const findKeyByValue = function (obj, val) {
  let foundKey = undefined;
  let keys = Object.keys(obj);

  for (let key of keys) {
    if (obj[key] === val) {
      foundKey = key;
    }
  }

  return foundKey;
}

module.exports = findKeyByValue;