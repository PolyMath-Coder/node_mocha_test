var expect = require('expect');

const utils = require('./utils');

it('should add two numbers correctly', () => {
  var res = utils.add(4, 9);

  expect(res).toBe(13);
});

it('should take the square of the number', () => {
  var res = utils.square(8);

  if (res !== 64) {
    throw new Error(`Expected 64, but actually got ${res}`);
  }
});
