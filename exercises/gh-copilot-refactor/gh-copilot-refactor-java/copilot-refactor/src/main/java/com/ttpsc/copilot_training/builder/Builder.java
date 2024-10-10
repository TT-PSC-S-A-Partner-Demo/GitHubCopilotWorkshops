package com.ttpsc.copilot_training.builder;

public class Builder {

    static class House {
        int windows;
        int doors;
        int floors;

        House(int windows, int doors, int floors) {
            this.windows = windows;
            this.doors = doors;
            this.floors = floors;
        }

        @Override
        public String toString() {
            return "House{" +
                    "windows=" + windows +
                    ", doors=" + doors +
                    ", floors=" + floors +
                    '}';
        }
    }

    public static House buildHouse(int windows, int doors, int floors) {
        return new House(windows, doors, floors);
    }

    public static void main(String[] args) {
        House house = buildHouse(10, 2, 3);
        System.out.println("House: " + house);
    }
}