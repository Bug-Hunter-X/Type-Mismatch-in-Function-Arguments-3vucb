function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b === 'number') {
    return a + b;
  } else {
    return a;
  }
}

let result1 = add(1, 2); // Correct usage
let result2 = addSafe(1, "2"); // Safe usage, handles string input.