class Tree {
  constructor(typeOfTree, x, y) {
    this.typeOfTree = typeOfTree;
    this.x = x;
    this.y = y;
  }
}

function newTree(typeOfTree, x, y) {
  return new Tree(typeOfTree, x, y);
}

const forest = [
  newTree("Oak", 1, 1),
  newTree("Pine", 2, 3),
  newTree("Oak", 4, 5),
];

forest.forEach((tree) => {
  console.log(`Tree of type ${tree.typeOfTree} at (${tree.x}, ${tree.y})`);
});
