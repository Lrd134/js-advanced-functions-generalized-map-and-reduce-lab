// Add your functions here
function map(info, fn) {
  let arr = []
  info.forEach( e =>
    {
      arr.push(fn(e));
    });
    return arr;
}

function reduce(src, callback, value) {
  let total;
  if (value) {
    total = value;
    for (let i = 0; i < src.length; i++) {
      total = callback(src[i], total);
    }
    return total;
  } else {
    total = src[0];
    for (let i = 1; i < src.length; i++) {
      total = callback(src[i], total);
    }
    return total;
  }
}