export default function BAM(arrays, dominateValue = true) {
  const result = arrays.pop();
  const keys = [ ...result.keys() ].filter(key => result[key] !== dominateValue);
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0, current = arrays.pop(); j < keys.length; j++) {
      if (current[keys[j]] !== dominateValue) continue;
      const key = keys.splice(--j, 1)[0];
      result[key] = current[key];
    }
    
    if (!keys.length) break;
  }
  
  return result;
}
