export default function BAM(arrays, or = true) {
  const data = {
    length: arrays[0].length,
    output: []
  }

  if (or) {
    data.calc = value => data.total | value;
    data.complete = Math.pow(data.length, 2) - 1;
    data.total = 0;
  } else {
    data.calc = value => data.total & value;
    data.complete = 0;
    data.total = Math.pow(data.length, 2) - 1;
  }

  for (let i = 0; i < arrays.length; i++) {
    if (data.total = data.calc(
      arrays[i].reverse().reduce((total, value, index) => !!value * Math.pow(2, index) + total)
    ) === data.complete) break;
  }

  for (let i = 0; i < data.length; i++) data.output[i] = !!(data.total & (1 << i));

  return data.output;
}
