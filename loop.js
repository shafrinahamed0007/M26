const numbers = [1,2,3,4,5];

// for(const number of numbers){
//     console.log(number)
// }

const employee ={
    name: "John Doe",
    1: "Desk One",
    'home-address': "123 Main ST",
    salary: 50000,
    position: "Software Engineer"
};

for(const key in employee){
    const value = employee[key]
    console.log(key, value)
}