import something from './y'

classDecorator(klass) -> klass
methodDecorator(m) -> m

@classDecorator
class X:
  static propTypes = {
    a: Number
  }

  static someMethod() -> 7

  someProperty = 5

  method() => this.someProperty

  @methodDecorator
  decoratedMethod() => this.someProperty * 2

  render() ->
    x = 5

    <div>
      hello world!
      <X some="prop" />
    </div>
