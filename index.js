export default function BAM(arrays, dominateValue = true) {
  dominateValue = !!dominateValue;

  const result = arrays.pop().map(value => !!value);
  const keys = [ ...result.keys() ].filter(key => result[key] != dominateValue);
  for (let i = 0; i < arrays.length && keys.length; i++) {
    for (let j = 0, current = arrays[i]; j < keys.length; j++) {
      if (!!current[keys[j]] != dominateValue) continue;
      const key = keys.splice(j--, 1)[0];
      result[key] = !!current[key];
    }
  }

  return result;
}
