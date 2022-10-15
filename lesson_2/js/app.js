// 3. boolean

// let isResident = true;
//     customerAge = 30;
// // условие
// if (!isResident) console.warn('Client cannot take a loan');

// let congratsMsg;
// if (customerAge > 45) 
//     congratsMsg = 'Greetings, Honorable'
// else if(customerAge > 18 && customerAge < 45)
//     congratsMsg = 'Greetings'
// else
//     congratsMsg = 'Hi'

// console.log(congratsMsg);

// операторы сравнения: == - нестрогое сравнение, === - строгое сравнение, != - нестрогое неравенство, !== - строгое неравенство, > <, >= - больше и равно, <= - меньше и равно
// логические операторы: && - и, || - или

let customerLogin = 'dzhseitek';
    customerPassword = '123qwe';

if (customerLogin === 'jseitek' && customerPassword === '123qwe')
    console.log('Login Successful');
else console.error('Login failed');

let customerIdentificationNumber = '22505199077552';
    firstInnSymbol = customerIdentificationNumber[0];

if((firstInnSymbol === '0' || firstInnSymbol === '1' || firstInnSymbol === '2') && customerIdentificationNumber.length === 14)
    console.log('INN validation success');
else console.warn('INN invalid');

let customerCardType = 'Maestro';

if(customerCardType === 'VISA')
    console.log('Send request to VISA processing');
else if(customerCardType === 'Elcart')
    console.log('Send request to Elcard processing');
else if(customerCardType === 'Maestro' || customerCardType === 'MasterCard')
    console.log('Send request to MasterCard processing');
else console.warn('Unknown card processing');

switch(customerCardType){
    case 'VISA':
        console.log('Send request to VISA processing');
        break;
    case 'Elcart':
        console.log('Send request to Elcart processing');
        break;
    case 'Maestro':
    case 'MasterCard':
        console.log('Send request to MasterCard processing');
        break;
    default:
        console.warn('Unknown card processing...');
        break;
}

// 4. undefined - неопределенный

let customerBirthDate;
console.log(customerBirthDate);

let symbol = customerIdentificationNumber[14];
console.log(symbol);

// 5. null - пустой
customerBirthDate = null;
console.log(typeof customerBirthDate);

// 6. object - объект (комплексный)
let customer = {
    ID: 22110199601412,
    name: 'Seitek',
    surName: 'Dzhangirbekov',
    lastName: 'Daniyarovich',
    birthDate: null,
    age: 25,
    isResident: true,
    'Card Type': 'VISA',
    cards: [{
        cardPan: '4169 5853 2270 0941',
        expiryDate: '03-05-2030',
        printName: 'Dzhangirbekov Seitek',
        CVC: 125
    }, {
        cardPan: '4177 4901 8852 1209',
        expiryDate: '12-07-2027',
        printName: 'Dzhangirbekov Seitek',
        CVC: 651
    }],
    bankAccount: '',
    passport: {
        series: 'ID',
        number: '2437781',
        expiryDate: '01-01-2001',
        issueAuthority: 'CON #1'
    }
};

console.log(customer.surName + ' ' + customer.name);
console.log(customer['Card Type']);
console.log(customer.cards[0]);
console.log(customer.passport.series + customer.passport.number);

let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2]);
// console.log(numbers.length);

for (let i = 0; i < numbers.length;  i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < customer.cards.length; i++) {
    console.log(customer.cards[i].expiryDate);
}

for (let card of customer.cards) {
    console.log(card.expiryDate);
}

let fruits = ['apple', 'marakuya', 'banan', 'melon', 'cherry'];
for (let fruit of fruits) {
    console.log(fruit);
}
// let array = [5, 'qwerty', true, undefined, null, {}, []];
let newArrayFruits = ['banan', 'pineapple'];