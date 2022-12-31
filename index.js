export default function BAM(arrays, mergeValue = true) {
  // Make sure merge value is always boolean.
  mergeValue = !!mergeValue;

  // Use pop to get starting set, make sure the values are boolean.
  const result = arrays.pop().map(value => !!value);

  // Convert result to an array which contains the keys that will be checked.
  let keys = [ ...result.keys() ].filter(key => result[key] !== mergeValue);

  // Loop through all arrays unless nothing is left.
  for (let i = 0; i < arrays.length && keys.length; i++) {
    // Only go through values which need to be checked.
    keys = keys.filter(key => {
      // If current value being checked does not set a change.
      if (!!arrays[i][key] !== mergeValue) return true;
      // Set it and make sure its boolean.
      result[key] = !!arrays[i][key];
      // Remove key so it is no longer checked.
      return false;
    });
  }

  return result;
}
