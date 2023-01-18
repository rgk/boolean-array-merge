export default function BAM(arrays, or = true) {
  const data = {
    length: arrays[0].length,
    output: []
  }

  const set = { min: 0, max: Math.pow(2, data.length) - 1 };

  if (or) {
    data.calc = value => data.total | value;
    data.complete = set.max;
    data.total = set.min;
  } else {
    data.calc = value => data.total & value;
    data.complete = set.min;
    data.total = set.max;
  }

  for (let i = 0; i < arrays.length; i++) {
    if ((data.total = data.calc(
      arrays[i].reduce((total, value, index) => !!value * Math.pow(2, index) + total, 0)
    )) === data.complete) break;
  }

  for (let i = 0; i < data.length; i++) data.output[i] = !!(data.total & (1 << i));

  return data.output;
}
