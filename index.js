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

// Binary effort.
function BAMbinary(arrays, or = true) {
  const uint8 = new Uint8Array(arrays.length);
  
  let length = 0;

  arrays.forEach((value, index) => {
    if (length < value.length) length = value.length;

    uint8[index] = value.reverse().reduce(
      (total, value, index) => !!value * Math.pow(2, index) + total
    )
  });

  const result = or ? uint8.reduce((total, value) => total | value) : uint8.reduce((total, value) => total & value);

  const output = result.toString(2).split('').map(value => !!parseInt(value));

  if (length > output.length) output.unshift(...new Array(length - output.length).fill(false));

  return output;
}
