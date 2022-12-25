
import assert from 'node:assert';
import BAM from './index.js';


assert.deepEqual(
  BAM(
    [
      [ true, false, true ], [ false, true, false ]
    ]
  ),
  [ true, true, true ]
);

assert.deepEqual(
  BAM(
    [
      [ true, true, true ], [ false, false, false ]
    ]
  ),
  [ true, true, true ]
);

assert.deepEqual(
  BAM(
    [
      [ true, false, false ], [ false, false, true ], [ false, false, false ]
    ]
  ),
  [ true, false, true ]
);

assert.deepEqual(
  BAM(
    [
      [ false, true, false ], [ true, false, true ]
    ],
    false
  ),
  [ false, false, false ]
);

assert.deepEqual(
  BAM(
    [
      [ 0, 1, 2 ], [ 2, 1, 0 ]
    ]
  ),
  [ true, true, true ]
);

assert.deepEqual(
  BAM(
    [
      [ '0', '1', '2' ], [ '0', '1', '2' ]
    ]
  ),
  [ true, true, true ]
);

assert.deepEqual(
  BAM(
    [
      [ '', '', 'true' ], [ '', 'true', '' ]
    ]
  ),
  [ false, true, true ]
);


assert.deepEqual(
  BAM(
    [
      [ [], {} ], [ {}, [] ]
    ]
  ),
  [ true, true ]
);
