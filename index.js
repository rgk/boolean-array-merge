export default function BAM(arrays, mergeValue = true) {
  // Make sure merge value is always boolean.
  mergeValue = !!mergeValue;

  // Use pop to get starting set, make sure the values are boolean.
  const result = arrays.pop().map(value => !!value);

  // Convert result to an array which contains the keys that will be checked.
  const keys = [ ...result.keys() ].filter(key => result[key] !== mergeValue);

  // Loop through all arrays unless nothing is left.
  for (let i = 0; i < arrays.length && keys.length; i++) {
    // Only go through values which need to be checked.
    for (let j = 0, current = arrays[i]; j < keys.length; j++) {
      // If current value being checked does not set a change.
      if (!!current[keys[j]] !== mergeValue) continue;
      // Remove key so it is no longer checked and reduce the count by 1 for the splice removal.
      const key = keys.splice(j--, 1)[0];
      // Set it and make sure its boolean.
      result[key] = !!current[key];
    }
  }

  return result;
}
