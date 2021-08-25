// declaration of let variable may be change
let mobilePrice = 2000;
// declaration of const variable can't be changed 
const name = 'Ashik Ahamed';
// an object 
const phone = {
    name: 'samsung galaxy A51',
    price: 30000,
    color: 'blue'
};

// template string 
const randomTemplateString = `${name} will be buy a ${phone.name}. ${phone.color} color phone. which will be cost him ${phone.price} taka. `
// console.log(randomTemplateString);

// arrow function with one parameter 
const singleParameterArrowFuntion = x => x / 5;
// console.log(singleParameterArrowFuntion(20));

// arrow function with two parameters 
const doubleParameterArrowFuntion = (x, y) => (x + 2) * (y + 2);
// console.log(doubleParameterArrowFuntion(2, 2));

// arrow function with three parameters 
const tripleParameterArrowFunction = (x, y, z) => x * y * z;
// console.log(tripleParameterArrowFunction(5, 5, 5));

// multiple line of arrow function 
const multipleLineArrowFunction = (x, y) => {
    const sum1 = x + 2;
    const sum2 = y + 2;
    const multiple = sum1 * sum2;
    return multiple;
};
// console.log(multipleLineArrowFunction(5, 5));


// map in an array 
const numbers = [5, 6, 7, 8, 9, 21, 34, 41, 23, 65, 78];
const outPut = numbers.map(number => number * 5);
// console.log(outPut);


// filter to find the odd numbers from an array 

const oddNumbers = numbers.filter(number => number % 2 == 1);

// console.log(oddNumbers);

// find the object which price is 5000 in an array 

const phones = [
    { name: 'samsumg S20', price: 51000 },
    { name: 'iphone 12', price: 50000 },
    { name: 'nokia', price: 5000 }
];
const afforablePhone = phones.find(phone => phone.price == 5000);
// console.log(afforablePhone);

// declare a object proparty as a variable by destructuring 
const aRandomObject = { x: 2, y: 4, z: 5, a: 9 };
const { x } = aRandomObject;
const newNumber = x + 5;
// console.log(newNumber);

// destructuring of an array
const aRandomArray = [54, 35, 89, 54, 82];

const [a, b, c] = aRandomArray;
const three = c;
// console.log(three);

const aRandomFunction = (x, y, z = 7) => x + y + z;
console.log(aRandomFunction(7, 7));

