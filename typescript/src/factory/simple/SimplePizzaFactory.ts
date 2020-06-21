import Pizza from './Pizza';
import CheesePizza from './pizzas/CheesePizza';

class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    if (type === 'cheese') {
      pizza = new CheesePizza();
    }
    return pizza;
  }
}

export default SimplePizzaFactory;
