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
console.log(multipleLineArrowFunction(5, 5));
// console.log(object);

// map in an array 
const numbers = [5, 6, 7, 8, 9, 21, 34, 41, 23, 65, 78];
const outPut = numbers.map(number => number * 5);
// console.log(outPut);
