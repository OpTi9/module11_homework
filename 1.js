// Задание 1
function countOddEven(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (typeof arr[i] === "number" && !Number.isNaN(arr[i]) && arr[i] % 2 === 0) {
      evenCount++;
    } else if (typeof arr[i] === "number" && !Number.isNaN(arr[i]) && arr[i] % 2 !== 0) {
      oddCount++;
    }
  }
  console.log(`Even: ${evenCount}, Odd: ${oddCount}, Zero: ${zeroCount}`);
}

countOddEven([1, 2, 3, 4, 0, 5, 6, null, "8", NaN]);
