package com.ttpsc.copilot_training.shapes;
import java.util.Arrays;
import java.util.List;

public class Shapes {

    public static void main(String[] args) {
        List<String> shapes = Arrays.asList("circle", "rectangle", "triangle");

        for (String shape : shapes) {
            if (shape.equals("circle")) {
                double radius = 5.0;
                double area = Math.PI * radius * radius;
                double perimeter = 2 * Math.PI * radius;
                System.out.printf("Circle - Area: %.2f, Perimeter: %.2f%n", area, perimeter);
            } else if (shape.equals("rectangle")) {
                double width = 4.0;
                double height = 6.0;
                double area = width * height;
                double perimeter = 2 * (width + height);
                System.out.printf("Rectangle - Area: %.2f, Perimeter: %.2f%n", area, perimeter);
            } else if (shape.equals("triangle")) {
                // Triangle logic to be implemented
            }
        }
    }
}