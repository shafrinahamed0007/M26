const employee = {
  name: "John Doe",
  1: "desk one",
  "home-address": "123 Main St",
  position: "Software Engineer",
  salary: 35000,
};

// dot notation
console.log(employee.name);
// console.log(employee.1);

// breaket notation
console.log(employee["home-address"]);
console.log(employee[1]);
console.log(employee["salary"]);

const key = "position";
console.log(employee[key]);
