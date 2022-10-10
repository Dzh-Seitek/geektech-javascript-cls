// цикл for in
let fruits = ['banana', 'apple', 'cherry', 'pineapple'];
// внутренняя структура массива:
let fruitsExplained = {
    0: 'banana',
    1: 'apple',
    2: 'cherry',
    3: 'pineapple'
};

for(let index in fruits) {
    console.log(fruits[index]);
}
console.log('---------------------------------------------'); // разделитель
for(let index of Object.keys(fruits)) {
    console.log(fruits[index]);
}

let customer = {
    ID: 22110199601412,
    name: 'Seitek',
    surname: 'Dzhangirbekov',
    lastname: 'Daniyarovich',
    birthDate: null,
    age: 25,
    isResident: true,
    'Card Type': 'VISA',
    // cards: [{
    //     cardPan: '4169 5853 2270 0941',
    //     expiryDate: '03-05-2030',
    //     printName: 'Dzhangirbekov Seitek',
    //     CVC: 125
    // }, {
    //     cardPan: '4177 4901 8852 1209',
    //     expiryDate: '12-07-2027',
    //     printName: 'Dzhangirbekov Seitek',
    //     CVC: 651
    // }],
    // bankAccount: '',
    // passport: {
    //     series: 'ID',
    //     number: '2437781',
    //     expiryDate: '01-01-2001',
    //     issueAuthority: 'CON #1'
    // }
};

// falsy expressions - ложноподобные выражения: false, 0, NaN, '', null, undefined
for(let key in customer) {
    let value = customer[key];
    // truthy and falsy expressions - правдоподобные и ложноподобные
    if(!value) continue;
    console.log(key, value);
}

// конвертация типа данных в логический
let a = !!customer.name;
console.log(a);
console.log('---------------------------------------------'); // разделитель

let moneySystems = ['Unistream', 'RIA', 'Contact'];
// let moneySystemEntry = prompt('Enter money system') || '';

// for(let moneySystem of moneySystems) {
//     if(moneySystemEntry.toLowerCase() === moneySystem.toLowerCase())
//         console.log(`Money transfered via ${moneySystem}`);
//         break;
// }       
// console.log('---------------------------------------------'); // разделитель

// Вложенные циклы (цикл в цикле)
let goods = [
    {
        groupName: 'Наушники',
        items: ['Xiaomi AirDots 3', 'Apple AirPods 2', 'JBL']
    },
    {
        groupName: 'Ноутбуки',
        items: ['HP Omen', 'Asus Zenbook', 'Dell Latitude']
    },
    {
        groupName: 'Смартфоны',
        items: ['Redmi Note 11 Pro', 'Google Pixel 8']
    }
];

for(let group of goods) {
    let result = group.groupName + ': ' + group.items.join(', ');
    // for (let item of group.items) {s
    console.log(result);
}
let size = 10;
for(let i = 0; i < size; i++) {
    let line = "";
    for(let j = 0; j < size; j++) {
        line += (i % 2 === 0 && j % 2 !== 0) ? " " : "#";
    }
    console.log(line);
}