// Binary array merge, array input can't have more then 32 values because of JavaScript limatation with bitwise operations.
export default function BAM(arrays, or = true) {
  const data = {
    length: arrays[0].length, // Length is calculated by the first array input.
    output: []
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

  // Convert integers into arrays based on base 2.
  for (let i = 0; i < data.length; i++) data.output[i] = !!(data.total & (1 << i));

  return data.output;
}
