// Задание 2
function isPrimeNumber(n) {
  if (n > 1000) {
    console.log("Invalid input. Number should be less than or equal to 1000.");
    return;
  }
  if (n === 0 || n === 1) {
    console.log("Not a prime number.");
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("Not a prime number.");
      return;
    }
  }
  console.log("Prime number.");
}

isPrimeNumber(3);
isPrimeNumber(10);
isPrimeNumber(1001);
