import Pizza from '../../Pizza';

class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago style deep dish cheese pizza';
    this.dough = 'Extra thick crust dough';
    this.sauce = 'Plum tomato sauce';

    this.toppings.push('Shredded mozarella cheese');
  }

  cut(): void {
    console.log('Cutting pizza into square slices');
  }
}

export default ChicagoCheesePizza;
