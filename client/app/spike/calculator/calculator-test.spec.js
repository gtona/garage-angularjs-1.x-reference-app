import {expect} from 'chai';

describe('calculator', () => {

  var calculator = {
    add: function (num1, num2) {
      return num1 + num2;
    },
    subtract: function (num1, num2) {
      return num1 - num2;
    }
  };

  describe('addition', () => {
    it('0 + 0 = 0', () => {
      expect(calculator.add(0, 0)).to.equal(0);
    });
    it('0 + 1 = 1', () => {
      expect(calculator.add(0, 1)).to.equal(1);
    });
    it('1 + 0 = 1', () => {
      expect(calculator.add(1, 0)).to.equal(1);
    });
    it('0 + (-1) = -1', () => {
      expect(calculator.add(0, -1)).to.equal(-1);
    });
    it('(-1) + 0 = -1', () => {
      expect(calculator.add(-1, 0)).to.equal(-1);
    });
    it('2 + 2 = 4', () => {
      expect(calculator.add(2, 2)).to.equal(4);
    });
    it('2 + (-2) = 0', () => {
      expect(calculator.add(2, -2)).to.equal(0);
    });

  });
  describe('subtraction', () => {
    it('0 - 0 = 0', () => {
      expect(calculator.subtract(0, 0)).to.equal(0);
    });
    it('0 - 1 = 0', () => {
      expect(calculator.subtract(0, 1)).to.equal(-1);
    });
    it('1 - 0 = 1', () => {
      expect(calculator.subtract(1, 0)).to.equal(1);
    });
    it('1 - (-1) = 2', () => {
      expect(calculator.subtract(1, -1)).to.equal(2);
    });
    it('(-1) - 1 = -2', () => {
      expect(calculator.subtract(-1, 1)).to.equal(-2);
    });


  });
});

