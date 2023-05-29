import { assert } from "chai"

describe('Tests', function () {
    describe('Successful', function () {
      it('Should be successful @run', function () {
        let someNumber = 11;
        assert.equal(someNumber, 11);
      });
      it('Should be failed @run', function () {
        let someNumber = 22;
        assert.equal(someNumber, 22);
      });
    });
  });
