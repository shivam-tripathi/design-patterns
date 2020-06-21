abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: Array<string> = [];

  prepare(): void {
    this.name = name;
    console.log(`Preparing ${name}.`);
    console.log(`Tossing dough ${this.dough}.`);
    console.log(`Adding sauce ${this.sauce}.`);
    console.log('Adding toppings:');
    this.toppings.forEach(topping => {
      console.log(`\t${topping}`);
    });
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350 degrees');
  }

  cut(): void {
    console.log('Cut pizza into diagnol slices');
  }

  box(): void {
    console.log('Place pizza in official pizza box');
  }
}

export default Pizza;
