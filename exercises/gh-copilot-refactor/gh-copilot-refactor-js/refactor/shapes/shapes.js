function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCirclePerimeter(radius) {
  return 2 * Math.PI * radius;
}

function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateRectanglePerimeter(width, height) {
  return 2 * (width + height);
}

function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}

function calculateTrianglePerimeter(base, sideA, height) {
  return base + sideA + Math.sqrt(base * base + height * height);
}

function shapes() {
  const shapes = ["circle", "rectangle", "triangle"];

  shapes.forEach((shape) => {
    if (shape === "circle") {
      const radius = 5.0;
      const area = calculateCircleArea(radius);
      const perimeter = calculateCirclePerimeter(radius);
      console.log(
        `Circle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`
      );
    } else if (shape === "rectangle") {
      const width = 4.0;
      const height = 6.0;
      const area = calculateRectangleArea(width, height);
      const perimeter = calculateRectanglePerimeter(width, height);
      console.log(
        `Rectangle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(
          2
        )}`
      );
    } else if (shape === "triangle") {
      const base = 3.0;
      const height = 4.0;
      const sideA = 5.0;
      const area = calculateTriangleArea(base, height);
      const perimeter = calculateTrianglePerimeter(base, sideA, height);
      console.log(
        `Triangle - Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(
          2
        )}`
      );
    }
  });
}

shapes();
