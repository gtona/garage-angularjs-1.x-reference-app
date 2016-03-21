import {expect} from 'chai';

let primeFactorsOf = number => {
  let n = number;
  const factors = [];

  if (n > 1) {
    if (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
  }

  if (n > 1) factors.push(n);
  return factors;
};

describe('prime factors', () => {
  expect(primeFactorsOf(1)).to.deep.equal([]); //null —> constant transformation

  expect(primeFactorsOf(2)).to.deep.equal([2]); //constant —> var transformation
                                                //split flow transformation

  expect(primeFactorsOf(3)).to.deep.equal([3]); //constant —> var transformation

  expect(primeFactorsOf(4)).to.deep.equal([2, 2]); // 2 split flow transformations

  expect(primeFactorsOf(5)).to.deep.equal([4]);
});
