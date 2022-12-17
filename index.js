export default function BAM(arrays, dominateValue = true, result = arrays.pop(), keys = result.keys()) {
  const current = arrays.pop();

  for (let i = 0; i < keys.length; i++) {
    if (current[keys[i]] !== dominateValue) continue;
    const key = keys.splice(keys[i], 1);
    result[key] = current[key];
  }

  if (keys.length) BAM(arrays, dominateValue, result, keys);

  return result;
}
