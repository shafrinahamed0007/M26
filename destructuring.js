// const product = {
//     name: "IPhone",
//     price: 799,
//     decription: "A Smart by Apple"
// }

// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;

const {
  name,
  price: phonePrice,
  brand,
  camera = "12Mp",
} = {
  name: "IPhone",
  price: 799,
  brand: "Apple",
  camera: "48 MP",
};
// console.log(camera);

const [first, second] = [10, 20];
console.log(first, second);

const [height, weight] = numbers;
console.log(height);
