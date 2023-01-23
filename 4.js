// Задание 4
function printNumbers(start, end) {
  let current = start;
  setInterval(() => {
    console.log(current);
    current++;
    if (current > end) {
      clearInterval();
    }
  }, 1000);
}

printNumbers(5, 15);
