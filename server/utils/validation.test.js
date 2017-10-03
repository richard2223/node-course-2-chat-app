const expect = require('expect');

const { isRealString } = require ('./validation');

describe('isRealString', () => {

  it ('should reject non-string values', () => {
    expect(isRealString(0)).toBeFalsy();
  });

  it ('should reject empty strings', () => {
    expect(isRealString('   ')).toBeFalsy();
  });

  it ('should accept real strings', () => {
    expect(isRealString('string')).toBeTruthy();
    expect(isRealString(' string string  ')).toBeTruthy();
  });

});
