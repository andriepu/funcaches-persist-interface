const chai = require('chai');

const Interface = require('../src');

chai.should();

describe('#Interface', () => {
  it('should raise error if interface is not implemented correctly', () => {
    const correctObj = {
      load: () => {},
      add: () => {},
      update: 'string value',
      remove: () => {},
      // clearAll: () => {},
    };

    let isError = false;

    try {
      const oldConsoleError = console.error;

      // Override, so it doesn't show up on the test terminal
      console.error = () => {};

      Interface(correctObj);

      console.error = oldConsoleError;
    } catch (err) {
      isError = true;
    } finally {
      isError.should.equal(true);
    }
  });

  it('should not raise error if all interfaces are implemented', () => {
    const correctObj = {
      load: () => {},
      add: () => {},
      update: () => {},
      remove: () => {},
      clearAll: () => {},
    };

    Interface(correctObj).should.not.Throw;
    Interface(correctObj).should.equal(correctObj);
  });
});
