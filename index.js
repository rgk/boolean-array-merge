/**
 * Converts an integer to an array representing its binary form.
 * 
 * @param {number} number - The integer to convert.
 * @param {number} length - The length of the resulting binary array.
 * @returns {Array<boolean>} An array of booleans representing the binary form of the number.
 */
export function convert(total, length, output = []) {
  for (let i = 0; i < length; i++) output[i] = !!(total & (1 << i));

  return output;
}

/**
 * Performs a bitwise merge on an array of boolean arrays using either OR or AND operation.
 * Note: The input arrays cannot have more than 32 values due to JavaScript's limitation with bitwise operations.
 * 
 * @param {Array<Array<boolean>>} arrays - An array of boolean arrays to be merged.
 * @param {boolean} or - Determines the type of bitwise operation to use. If true, uses OR; if false, uses AND.
 * @returns {Array<boolean>} A boolean array representing the result of the bitwise merge operation.
 */
export function BAM(arrays = [], or = true) {
  if (!Array.isArray(arrays) || arrays.length === 0) return [];

  const data = {
    length: arrays.reduce(
      (accumulator, currentValue) => {
        if (accumulator < currentValue.length) return currentValue.length;
        return accumulator;
      },
    0), // Length is the longest array in the data set.
  }

  // Min and max values for the 32 bit integers.
  const set = { min: 0, max: Math.pow(2, data.length) - 1 };

  // Set approrate calculations depending if its OR or AND.
  if (or) {
    // OR means only one bit needs to be 1, thus it will prioritize true.
    data.calc = value => data.total | value;
    data.complete = set.max;
    data.total = set.min;
  } else {
    // AND means both bits need to be 1, thus it will prioritize false.
    data.calc = value => data.total & value;
    data.complete = set.min;
    data.total = set.max;
  }

  // Loop through the arrays and merge, if the value is 'complete' before all input merged, it will end.
  for (let i = 0; i < arrays.length; i++) {
    if ((data.total = data.calc(
      // Calculate a integer based on the input array, treating index and value like binary. [ false, true ] == 2 == 0 1
      arrays[i].reduce((total, value, index) => !!value * Math.pow(2, index) + total, 0)
    )) === data.complete) break;
  }

  return convert(data.total, data.length);
}
