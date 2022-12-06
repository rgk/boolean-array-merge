export default function BAM(arrays, dominateValue = true, result = []) {
  const current = arrays.pop();

  for (let i = 0, spot = result[i]; i < current.length; i++, spot = result[i]) {
    if (spot === dominateValue || spot === current[i]) continue;
    result[i] = current[i];
  }

  if (arrays.length) BAM(arrays, dominateValue, result);

  return result;
}
