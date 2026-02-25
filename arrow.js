console.log(add(10, 20));

// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
// console.log(add2(60,50))
const add2 = function (num1, num2) {
  return num1 + num2;
};

console.log(add2(30, 40));

// arrow function
const add3 = (num1, num2) => num1 + num2;

console.log(add3(10, 90));

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum / diff;
  return result;
};

const divide = (p, q) => p / q;

const minus = (num1, num2) => num1 - num2;

// document.getElementById("btn").addEventListener("click", ()=>{})
// document.getElementById("btn").addEventListener("click", (event)=> {})
