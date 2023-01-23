// Задание 3
function outerFunction(a) {
  return function innerFunction(b) {
    return a + b;
  }
}

const add = outerFunction(5);
console.log(add(3));  // 8


