// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return (x, y) => [dx + x, dy + y]
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return (x, y) => [sx * x, sy * y]
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return (...args) => g(...f(...args));
}

const isArray = (val) => Array.isArray(val);
export const isObject = (val) => {
  return typeof val === 'object'
    && val !== null
    && !Array.isArray(val)
    && !(val instanceof RegExp)
    && !(val instanceof Date)
    && !(val instanceof Set)
    && !(val instanceof Map)
}

function compareValues(valA, valB) {
  if (isObject(valA) && isObject(valB)) {
    return compareObject(valA, valB);
  } else if (isArray(valA) && isArray(valB)) {
    return compareArrays(valA, valB);
  } else {
    return valA === valB;
  }
}

const compareArrays = (a, b) => {
  if (a.length !== b.length) return false;

  return a.every((element, index) => {
    let valA = element;
    let valB = b[index];
    return compareValues(valA, valB);
  });
}

const compareObject = (a, b) => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  return keysA.every((element) => {
    let valA = a[element];
    let valB = b[element];

    return Object.hasOwn(b, element) && compareValues(valA, valB);
  });
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let cache = null;
  let key = [];

  return (...args) => {
    if (compareArrays(key, args)) {
      return cache;
    }

    key = args;

    return cache = f(...args);
  }
}
