package com.ttpsc.copilot_training.flyweight;

import java.util.ArrayList;
import java.util.List;

class Tree {
    String typeOfTree;
    int x, y;

    Tree(String typeOfTree, int x, int y) {
        this.typeOfTree = typeOfTree;
        this.x = x;
        this.y = y;
    }
}

public class Flyweight {
    public static Tree newTree(String typeOfTree, int x, int y) {
        return new Tree(typeOfTree, x, y);
    }

    public static void main(String[] args) {
        List<Tree> forest = new ArrayList<>();
        forest.add(newTree("Oak", 1, 1));
        forest.add(newTree("Pine", 2, 3));
        forest.add(newTree("Oak", 4, 5));

        for (Tree tree : forest) {
            System.out.printf("Tree of type %s at (%d, %d)\n", tree.typeOfTree, tree.x, tree.y);
        }
    }
}