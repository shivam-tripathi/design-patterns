import Pizza from './Pizza';

export default abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  // abstract factory(type: string): Product
  protected abstract createPizza(type: string): Pizza;
}
