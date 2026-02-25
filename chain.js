const employee = {name: "John Doe", 
     1:"desk one",
     'home-address': '123 Main St',
      position:"Software Engineer",
      salary: 35000,
      family: {
        father: "Richard Doe",
        mother: {name: "Jane Doe", age: 55}
      }
    
    };

const value = employee.name;
console.log(employee?.family?.mother?.age);