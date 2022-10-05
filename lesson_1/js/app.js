console.log('Hello World');
console.warn('Warning!');
console.error('ERROR!');

// Camel Case
// let userName = prompt('What is your name?');
// console.log(userName);

/*
Типы данных в JavaScript:

1) string - текстовый (строчный)
2) number - числовой
3) boolean - логический
4) undefined - неопределенный
5) null - пустой
6) object - объектный (комплексный)
7) BigInt - для длинной арифметики
8) symbol - уникальный

*/

// Баги JavaScript
console.log(typeof(alert)); // функция в JS является объектом, хотя определяется как "function"
console.log(typeof(null)); // null в JS является отдельным типом данных, хотя определяется как "object"

// 1. string

let customerName = "Seitek";
let customerSurname = "Dzhangirbekov";
let customerFullName = customerSurname + " " + customerName;

// 2. number

let customerId = 456;

// long-hand update
customerId = customerId + 1;

// short-hand update
customerId += 1;
customerId++;

console.log(customerId * "qwerty"); // NaN - Not a Number (не число)
console.log(customerId / 0); // Infinity - бесконечность

// 3. boolean 
let isResident = true;
let customerAge = 30;
// условие
if (!isResident) console.warn('Client cannot take a loan');

let congratsMsg;
if (customerAge > 45) 
    congratsMsg = 'Greetings, Honorable'
else if(customerAge > 18 && customerAge < 45)
    congratsMsg = 'Greetings'
else
    congratsMsg = 'Hi'

console.log(congratsMsg);

// операторы сравнения: == - нестрогое сравнение, === - строгое сравнение, != - нестрогое неравенство, !== - строгое неравенство, > <, >= - больше и равно, <= - меньше и равно
// логические операторы: && - и, || - или

let customerLogin = 'dzhseitek';
let customerPassword = '123qwe';

if (customerLogin === 'jseitek' && customerPassword === '123qwe')
    console.log('Login Successful');
else console.error('Login failed');