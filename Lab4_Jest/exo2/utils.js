function first(array, n) {
  if (array == null) return [];
  if (n != null && n <= 0) return [];
  if (n == null) return array[0];
  return array.slice(0, Math.floor(n));
}

function last(array, n) {
  if (array == null) return undefined;
  if (n != null && n <= 0) return [];
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - Math.floor(n), 0));
}

function concatStrings(arr, joinChar = ',') {
  if (!Array.isArray(arr)) return '';
  return arr.map(String).join(joinChar);
}

function chunk(array, size) {
  if (!Array.isArray(array)) return [];
  if (typeof size !== 'number' || size <= 0) return [];
  const s = Math.floor(size);
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, index + s));
    index += s;
  }
  return chunkedArr;
}

module.exports = { first, last, concatStrings, chunk };
