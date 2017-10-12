var _class, _desc, _value, _class2, _class3, _temp;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

import something from './y';

function classDecorator(klass) {
  return klass;
}function methodDecorator(m) {
  return m;
}
let X = classDecorator(_class = (_class2 = (_temp = _class3 = class X {
  constructor() {
    this.someProperty = 5;
    this.method = this.method.bind(this);
    this.decoratedMethod = this.decoratedMethod.bind(this);
  }

  static someMethod() {
    return 7;
  }

  method() {
    return this.someProperty;
  }
  decoratedMethod() {
    return this.someProperty * 2;
  }render() {
    const x = 5;

    return React.createElement(
      "div",
      null,
      "hello world!",
      React.createElement(X, { some: "prop" })
    );
  }
}, _class3.propTypes = {
  a: Number
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, "decoratedMethod", [methodDecorator], Object.getOwnPropertyDescriptor(_class2.prototype, "decoratedMethod"), _class2.prototype)), _class2)) || _class;