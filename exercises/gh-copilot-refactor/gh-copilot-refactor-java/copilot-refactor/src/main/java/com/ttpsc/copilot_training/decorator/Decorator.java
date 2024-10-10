package com.ttpsc.copilot_training.decorator;

public class Decorator {

    static class Coffee {
        public double cost() {
            return 2.00;
        }

        public String description() {
            return "Basic Coffee";
        }
    }

    public static void main(String[] args) {
        Coffee coffee = new Coffee();
        System.out.printf("%s: $%.2f\n", coffee.description(), coffee.cost());
    }
}