let num = [1, 2, 3, 4, 5];
let nNumbers = [];

for (let i = 0; i < num.length; i++) {
  nNumbers[i] = num[i] * 100;
}

console.log(nNumbers);
let strings = ["Hello", "World", "OpenAI"];
let lengths = [];

for (let i = 0; i < strings.length; i++) {
  lengths[i] = strings[i].length;
}

console.log(lengths);
let numbers = [10, 200, 50, 120, 300];

let newNumbers = numbers.filter(function (number) {
  return number <= 100;
});

console.log(newNumbers);
