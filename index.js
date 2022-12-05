export default function BAM (arrays, dominateValue = true, result = []) {
  const current = arrays.pop();
  
  for (const [key, value] of current) {
    if (result[key] === dominateValue) continue;
    
    result[key] = value;
  }
  
  if (arrays.length) BAM(arrays, dominateValue, result);
  
  return result;
}
