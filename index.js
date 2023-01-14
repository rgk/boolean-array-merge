export default function BAM(arrays, mergeValue = true, ignore = []) {
  // Make sure merge value is always boolean.
  mergeValue = !!mergeValue;

  // Get starting set, make sure the values are boolean.
  const result = arrays[0].map(value => !!value);

  // Convert result to an array which contains the keys that will be checked.
  const keys = [ ...result.keys() ].filter(key => result[key] !== mergeValue && !ignore[key]);

  // Loop through the keys so arrays don't need to be altered, fastest option.
  for (let i = 0, key = keys[i]; i < keys.length; key = keys[++i]) {
    // Loop through the arrays first to last.
    for (let j = 0, value; ++j < arrays.length;) {
      // If current value being checked does not set a change, skip.
      if ((value = !!arrays[j][key]) !== mergeValue) continue;

      // Set it.
      result[key] = value;

      // Move to the next key.
      break;
    }
  }

  return result;
}

// Binary effort, input array length can't be bigger then 4294967295.
function BAMbinary(arrays, or = true) {
  const data = {
    length: arrays[0].length,
    output: []
  }

  if (or) {
    data.calc = value => data.total | value;
    data.complete = Math.pow(length, 2);
  } else {
    data.calc = value => data.total & value;
    data.complete = 0;
  }

  for (let i = 0; i < arrays.length; i++) {
    if (data.total = data.calc(
      arrays[i].reverse().reduce((total, value, i) => !!value * Math.pow(2, i) + total)
    ) === data.complete) break;
  }

  for (let i = 0; i < data.length; i++) {
    data.output[i] = !!(data.total & (1 << i));
  }

  return data.output;
}
