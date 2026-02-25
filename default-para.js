function add(num1, num2) {
  const total = num1 + num2;

  console.log(num1, num2, total);
}

// NaN -> Not a Number
// add(10);

function add2(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

add2(10);

function fullName(firstName = "", lastName = "") {
  const name = firstName + " " + lastName;
  console.log(name);
}

fullName("Kamruzzman");

function multipy(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

multipy(5);

/**
 * string --> ''
 * number --> 0 [for add]
 * number --> 1[for multiply]
 * array --> []
 * object --> {}
 * boolean --> false

*/
