export default function BAM(arrays, mergeValue = true) {
  // Make sure merge value is always boolean.
  mergeValue = !!mergeValue;

  // Use pop to get starting set, make sure the values are boolean.
  const result = arrays.pop().map(value => !!value);

  // Produce an array which contains the keys which should be set.
  const keys = [ ...result.keys() ].filter(key => !!result[key] !== mergeValue);

  // Loop through all arrays unless nothing is left.
  for (let i = 0; i < arrays.length && keys.length; i++) {
    // Only go through values which need to be checked.
    for (let j = 0, current = arrays[i]; j < keys.length; j++) {
      // If current value being checked does not set a change.
      if (!!current[keys[j]] !== mergeValue) continue;
      // Remove key so it is no longer checked.
      const key = keys.splice(j--, 1)[0];
      // Set it and make sure its boolean.
      result[key] = !!current[key];
    }
  }

  return result;
}
