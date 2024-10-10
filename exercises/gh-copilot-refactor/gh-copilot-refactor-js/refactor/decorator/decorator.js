class Coffee {
  cost() {
    return 2.0;
  }

  description() {
    return "Basic Coffee";
  }
}

const coffee = new Coffee();
console.log(`${coffee.description()}: $${coffee.cost().toFixed(2)}`);
