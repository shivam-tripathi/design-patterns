import PizzaStore from '../PizzaStore';
import ChicagoCheesePizza from '../pizzas/Chicago/ChicagoCheesePizza';
import Pizza from '../Pizza';

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    if (type === 'cheese') {
      pizza = new ChicagoCheesePizza();
    }
    return pizza;
  }
}

export default ChicagoPizzaStore;
