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
function BAMbinary(arrays, and = false) {
  const uint8 = new Uint8Array(arrays.length);
  
  const binary = uint8.map(
    (data, index) => arrays[index].reduce(
      (total, value, index) => !!value ( index + 1 ) + total
    )
  );

  const result = and ? binary.reduce((total, value) => total & value) : (total, value) => total | value);

  return result.toString(2).split('').map(value => !!value);
}
