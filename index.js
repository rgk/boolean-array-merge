export default function BAM(arrays, mergeValue = true, ignore = []) {
  // Make sure merge value is always boolean.
  mergeValue = !!mergeValue;

  // Use pop to get starting set, make sure the values are boolean.
  const result = arrays.pop().map(value => !!value);

  // Convert result to an array which contains the keys that will be checked.
  const keys = [ ...result.keys() ].filter(key => result[key] !== mergeValue && !ignore[key]);

  // Loop through the keys so arrays don't need to be altered, fastest option.
  for (let i = keys.length - 1, key = keys[i]; ~i; key = keys[i--]) {
    // Loop through the arrays last to first.
    for (let j = arrays.length - 1, value = !!arrays[j][key]; ~j; value = !!arrays[j--][key]) {
      // If current value being checked does not set a change, skip.
      if (value !== mergeValue) continue;

      // Set it.
      result[key] = value;

      // Move to the next key.
      break;
    }
  }

  return result;
}
