let fruits = [
    {
        name: 'kiwi',
        weight: 76,
        'unit of weight': 'g',
        price: 3.5,
        currency: 'USD',//USD, EUR, GBP, INR
    },
    {
        name: 'cherry',
        weight: 12,
        'unit of weight': 'g',
        price: 2.75,
        currency: 'EUR',//USD, EUR, GBP, INR
    },
    {
        name: 'mango',
        weight: 150,
        'unit of weight': 'g',
        price: 5.25,
        currency: 'USD',//USD, EUR, GBP, INR
    },

];
let x = 'message here';
let answer = x || 'No such property';
console.log(answer);
// console.log("hello");

function lookUpFruit (name, prop) {
    for(let i = 0; i < fruits.length; i++){
        if( fruits[i].name === name)
            return fruits[i][prop] || "No such property";
    }
    return "No such fruit name";
}

let ans = lookUpFruit("mangos", "pricee");
console.log(ans);

let car = {model: 'BMW', color: 'red'};
console.log(car.color);
fruits.forEach(fruit => console.log("Name:",fruit.name.toUpperCase(), ", weight:", fruit.weight, fruit['unit of weight']));

console.log("MAP, Array instance methods");
let new_fruits = fruits.map(fruit => fruit.name.toUpperCase());
console.log(new_fruits);

console.log("Names");
let names = ['bob','tom','pam','paul'];
let new_names = names.map(console.log);
console.log(new_names);
console.log(typeof names);
console.log(typeof new_names);
console.log(typeof names[0]);
console.log(typeof new_names[0]);


//get
document.getElementById('ans').innerHTML = `<h2>${names}</h2>`;
// document.getElementById('ans1').innerHTML = names;

//names.fill('foo',1,3);
//document.getElementById('ans1').innerHTML = names;

// let data = document.getElementsByClassName('answer')[0].innerHTML = '<p>today is a new day</p>';

//sort
names.sort();
document.getElementById('ans1').innerHTML = names;
//reverse
names.reverse()
document.getElementById('ans2').innerHTML = names;

let data = document.getElementsByClassName('answer');
console.log(data);

//using typeof
console.log('int data type: ',typeof NaN);
console.log('5 * "hello"', 5 * 'hello');
console.log('typeof NaN', typeof NaN);
let boolfoo = isNaN(5 * 'hello');
console.log(boolfoo);
console.log(typeof('hello') === 'string');
console.log(typeof(7) === 'number');
console.log(typeof(7 * 'hello') === 'number');