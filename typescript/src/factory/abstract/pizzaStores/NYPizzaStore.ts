import PizzaStore from '../PizzaStore';
import NYCheesePizza from '../pizzas/NY/NYCheesePizza';
import Pizza from '../Pizza';

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza: Pizza = null;
    if (type === 'cheese') {
      pizza = new NYCheesePizza();
    }
    return pizza;
  }
}

export default NYPizzaStore;
