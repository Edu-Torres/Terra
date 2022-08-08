const _pile = new WeakMap();

class Stack {
  constructor() {
    _pile.set(this, []);
  }

  push(value) {
    _pile.get(this).push(value);
  }
  peek() {
    return _pile.get(this)[this.count - 1];
  }
  pop() {
    return _pile.get(this).pop();
  }
  get count() {
    return _pile.get(this).length;
  }
}

const s = new Stack();
