var rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};

function solveRect(l, b) {
  console.log("Solving for rectangle with l=" + l + "and b=" + b);
  if (l <= 0 || b <= 0) {
    console.log("dimesnions>0");
  } else {
    console.log("Area" + rect.area(l, b));
    console.log("perimeter" + rect.perimeter(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
