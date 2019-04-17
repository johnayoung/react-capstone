/* eslint-disable no-nested-ternary */
const isObject = val => {
  return val === null
    ? false
    : Array.isArray(val)
    ? false
    : typeof val === 'function' || typeof val === 'object';
};

const isPrim = val => {
  const type = typeof val;
  return !!(type === 'number' || type === 'string' || type === 'boolean' || type == 'null');
};

const isArray = val => {
  return Array.isArray(val);
};

// Will parse an object or array into a flattened object
const parseObject = (obj, path) => {
  if (path == undefined) {
    path = '';
  }

  if (isObject(obj)) {
    const d = {};
    for (const i in obj) {
      // For values in object
      const newD = parseObject(obj[i], `${path + i}/`); // index if array, value if object
      Object.assign(d, newD);
    }
    return d;
  }
  if (isPrim(obj)) {
    const d = {};
    const endPath = path.substr(0, path.length - 1);
    d[endPath] = obj;
    return d;
  }

  return {};
};

// Find the first array in an object, otherwise turn object into array
const arrayFrom = json => {
  const queue = [];
  let next = json;

  while (next !== undefined) {
    if (isArray(next)) {
      if (next.length > 0) {
        if (!isPrim(next[0])) return next;
      }
    }
    if (isObject(next)) {
      // queue = Object.keys(next).reduce((a, cv) => {
      //   a.push(next[cv]);
      //   return a;
      // }, []);
      for (const key in next) {
        queue.push(next[key]);
      }
    }
    next = queue.shift();
  }
  // nothing found, consider the whole object a row
  return [json];
};

// 1. Find the primary array to iterate over
// 2. For each item in the array, recursively flatten it into tabular object
// 3. Turn tabular object into a csv row (use a library for this)
const doCSV = json => {
  const inArray = arrayFrom(json);

  const outArray = [];
  for (const row in inArray) {
    outArray[outArray.length] = parseObject(inArray[row]);
  }

  return outArray;
};

export default doCSV;
