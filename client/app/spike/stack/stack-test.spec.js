import chai from 'chai';
let expect = chai.expect;

let makeStack = (capacity = 2) => {
  if (capacity < 0) throw new Error('illegal capacity');
  let queue = [];
  let isEmpty = () => queue.length === 0;

  let pop = () => {
    if (queue.length === 0) throw new Error('stack underflow');
    return queue.pop();
  };

  let push = (element) => {
    if (capacity === queue.length ) throw new Error('stack overflow');
    queue.push(element);
  };

  let size = () => queue.length;

  return {
    isEmpty: isEmpty,
    pop: pop,
    push: push,
    size: size
  };
};

describe('stack', () => {
  it('isEmpty()', () => {
    let stack = makeStack();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('push() leaves size === 1', () => {
    let stack = makeStack();
    stack.push({});
    expect(stack.size()).to.equal(1);
  });

  it('push() -> pop() leaves size === 0', () => {
    let stack = makeStack();
    stack.push({});
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  describe('handle overflow with default capacity = 2', () => {
    it('doesn\'t throw', () => {
      let stack = makeStack();

      expect( () => {
        stack.push({});
      }).to.not.throw(Error, /stack overflow/);
    });

    it('doesn\'t throw again', () => {
      let stack = makeStack();

      expect( () => {
        stack.push({});
        stack.push({});
      }).to.not.throw(Error, /stack overflow/);
    });

    it('does finally throw', () => {
      let stack = makeStack();

      expect( () => {
        stack.push({});
        stack.push({});
        stack.push({});
      }).to.throw(Error, /stack overflow/);
    });
  });

  it('handle underflow', () => {
    let stack = makeStack();

    expect( () => {
      stack.pop();
    }).to.throw(Error, /stack underflow/);
  });

  it('push pop get same one back', () => {
    let stack = makeStack();
    let element = {};
    stack.push(element);
    expect(stack.pop()).to.equal(element);
  });

  it('not isEmpty()', () => {
    let stack = makeStack();
    stack.push({});
    expect(stack.isEmpty()).to.equal(false);
  });

  it('push 1,2 pop 2,1 leaves empty stack', () => {
    let stack = makeStack();
    stack.push({});
    stack.push([]);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('handle illegal capacity', () => {
    expect( () => {
      makeStack(-1);
    }).to.throw(Error, /illegal capacity/);
  });
});
