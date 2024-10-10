class Beverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water");
  }

  brew() {
    throw new Error("This method should be overridden!");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  addCondiments() {
    throw new Error("This method should be overridden!");
  }
}

class Tea extends Beverage {
  brew() {
    console.log("Steeping the tea");
  }

  addCondiments() {
    console.log("Adding lemon");
  }
}

class Coffee extends Beverage {
  brew() {
    console.log("Brewing coffee grounds");
  }

  addCondiments() {
    console.log("Adding sugar and milk");
  }
}

const tea = new Tea();
tea.prepare();

const coffee = new Coffee();
coffee.prepare();
