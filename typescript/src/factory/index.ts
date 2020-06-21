import PizzaStore from './abstract/PizzaStore';
import NYPizzaStore from './abstract/pizzaStores/NYPizzaStore';
import ChicagoPizzaStore from './abstract/pizzaStores/ChicagoPizzaStore';
import Pizza from './abstract/Pizza';

function main(): void {
  let pizzaStore: PizzaStore;
  let pizza: Pizza;

  pizzaStore = new NYPizzaStore();
  pizza = pizzaStore.orderPizza('cheese');
  console.log(`Ethan ordered ${pizza.name}`);

  pizzaStore = new ChicagoPizzaStore();
  pizza = pizzaStore.orderPizza('cheese');
  console.log(`Joel ordered ${pizza.name}`);
}

main();
