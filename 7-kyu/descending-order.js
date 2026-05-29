// Your task is to make a function that can take any non-negative integer as an argument and return it
// with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +result;
  // мы получили набор цифр - перевели в строку - разбили строку по элементам "" в массив -
  // -отсортировали массив от большего к меньшему - собрали обратно в строку убрав "промежутки"
  // вернули результат преобразовав его в чисто +
}
