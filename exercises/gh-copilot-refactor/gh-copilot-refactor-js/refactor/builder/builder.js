class House {
  constructor(windows, doors, floors) {
    this.windows = windows;
    this.doors = doors;
    this.floors = floors;
  }
}

function buildHouse(windows, doors, floors) {
  return new House(windows, doors, floors);
}

const house = buildHouse(10, 2, 3);
console.log(`House: ${JSON.stringify(house)}`);
