import Pizza from '../../Pizza';

class NYCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY style sauce and cheese pizza';
    this.dough = 'Thin crust dough';
    this.sauce = 'Marinara sauce';

    this.toppings.push('Grated Ragiano Cheese');
  }
}

export default NYCheesePizza;
