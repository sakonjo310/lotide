const findKey = (obj, callback) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let item of keys) {
    if (callback(obj[item])) {
      return item;
    }
  }
  return undefined;
}


module.exports = findKey;