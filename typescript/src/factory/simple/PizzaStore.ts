import Pizza from './Pizza';
import SimplePizzaFactory from './SimplePizzaFactory';

class PizzaStore {
  pizzaFactory: SimplePizzaFactory = null;
  constructor(pizzaFactory: SimplePizzaFactory) {
    this.pizzaFactory = pizzaFactory;
  }
  orderPizz(type: string): Pizza {
    const pizza = this.pizzaFactory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
