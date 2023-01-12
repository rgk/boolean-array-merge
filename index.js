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
