
import assert from 'node:assert';
import { BAM } from './index.js';

// Basic functionality.
assert.deepStrictEqual(
  BAM(
    [
      [ true, false, true ], [ false, true, false ]
    ]
  ),
  [ true, true, true ]
);

// Test output order.
assert.deepStrictEqual(
  BAM(
    [
      [ false, true, false ], [ false, false, true ]
    ]
  ),
  [ false, true, true ]
);

// Test larger array of arrays.
assert.deepStrictEqual(
  BAM(
    [
      [ true, false, false ], [ false, false, true ], [ false, false, false ]
    ]
  ),
  [ true, false, true ]
);

// Check OR output.
assert.deepStrictEqual(
  BAM(
    [
      [ false, true, false ], [ true, false, true ]
    ],
    false
  ),
  [ false, false, false ]
);

// Check non-boolean integers.
assert.deepStrictEqual(
  BAM(
    [
      [ 0, 1, 2 ], [ 2, 1, 0 ]
    ]
  ),
  [ true, true, true ]
);

// Check integers as strings.
assert.deepStrictEqual(
  BAM(
    [
      [ '0', '1', '2' ], [ '0', '1', '2' ]
    ]
  ),
  [ true, true, true ]
);

// Check falsey and truthy values.
assert.deepStrictEqual(
  BAM(
    [
      [ '', '', 'true' ], [ '', 'true', '' ]
    ]
  ),
  [ false, true, true ]
);

// Check more abstract truthy values.
assert.deepStrictEqual(
  BAM(
    [
      [ [], {} ], [ {}, [] ]
    ]
  ),
  [ true, true ]
);

// Make sure it only accepts arrays.
assert.deepStrictEqual(
  BAM(
    {}
  ),
  [ ]
);

// Make sure it only accepts arrays nested.
assert.deepStrictEqual(
  BAM(
    [
      [ true, false, true ], {}
    ]
  ),
  [ ]
);

// Check if no value fails.
assert.deepStrictEqual(
  BAM(
  ),
  [ ]
);
