
import assert from 'node:assert';
import BAM from 'index.js';


assert.deepEqual(
  BAM([[ true, false, true ], [ false, true, false ]]),
  [ true, true, true ]
);

assert.deepEqual(
  BAM([[ true, true, true ], [ false, false, false ]]),
  [ true, true, true ]
);
