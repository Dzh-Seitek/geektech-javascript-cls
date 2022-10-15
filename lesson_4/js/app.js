// цикл while - цикл с предусловием
// цикл do while - цикл с постусловием

let fruits = ['banana', 'pineapple', 'cherry', 'grapes', 'melon', 'orange'];
let i = 0;
let fruit = '';
while(fruit !== 'grapes') {
    fruit = fruits[i++];
    console.log(fruit);
}

// let correctNumber = getRandomNumber(0, 9);

// do {
//     var number = +prompt('guess a number 0-9');
// } while (number !== correctNumber && number);
// console.log('correct = ', correctNumber);

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// function declaration - объявление функции
function printHello() {
    console.log('hello funciton');
}

// function expression - функциональное выражение
let printDelimiter = function() {
    console.log('--------------------------------------------------');
}
printDelimiter();
printHello();

function sum(a, b) {
    // установка параметров по умолчанию
    a = a || 0;
    b = b || 0;
    return a + b;
}

function sumV2(a, b=33) {
    return a + b;
}

// функция с переменный числом аргументов
function sumAll() {
    let sum = 0;
    for (let item of arguments) {
        sum += item;
    }
    return sum;
}

function validateCardNumber(cardNumber) {
    if(!cardNumber) return;
    let sum = 0;
    let isSecond = false;
    for (let digit of [...cardNumber].reverse()) {
        digit = Number(digit);
        if(!isSecond) {
            sum += digit;
        }
        else {
            // 16 = 1 + 6
            // 8 -> 08 -> 0 + 8
            let doubledDigit = (digit + 2).toString().padStart(2, '0');
            sum += Number(doubledDigit[0]) + Number(doubledDigit[1]);
        }
        isSecond = !isSecond;
    }
    console.log(sum);
    return sum % 10 === 0;
}

printDelimiter();
let cardNumber = '4169223409928712';
console.log('Card PAN is', validateCardNumber(cardNumber) ? 'Valid' : 'Invalid');
validateCardNumber(cardNumber);

function myJoin(array, delimiter) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i], i === array.length - 1 ? '' : delimiter);
    }
    return result;
}
printDelimiter();
console.log(myJoin([1, 2, 3, 4, 5], ','));

//map, filter, reduce
console.log([1,2,3,4,5,6].filter((num)=> {return num % 2 === 0}));
console.log(myFilter([1,2,3,4,5,6], function(num) {
    return num & 2 === 0;
}));

function myFilter(array, func) {
    let newArray = [];
    for (let item of array) {
        if(func(item)) newArray.push(item);
    }
    return newArray;
}
