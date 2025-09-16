function rectangleInfo(length: number, width: number): { perimeter: number; area: number } {
  const perimeter = 2 * (length + width);
  const area = length * width;

  return { perimeter, area };
}

const result = rectangleInfo(20, 5);
console.log("Chu vi:", result.perimeter);
console.log("Diện tích:", result.area);
