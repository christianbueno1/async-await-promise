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

//working with Objects
console.log("Working with Objects");
data = 
{
    name: 'kiwi',
    weight: 76,
    'unit of weight': 'g',
    price: 3.5,
    currency: 'USD',//USD, EUR, GBP, INR
};
console.log(data);
let dataArray = Object.entries(data);
console.log(dataArray);
let key = 'sector';
let value = "a-6";

data.sectorr = "ab-25";
data[key] = value;
// console.log(data);
data = {};
data['foo'] = 'bar';

//Callbacks examples
//Async javascript, working with callbacks, youtube Dev-Ed
console.log('Async javascript, working with callbacks');

console.log('start');

function foo1(message, callback){
    setTimeout(() => {
        let m = message.toUpperCase();
        callback(m);
    }, 3000);
}
function foo2(fullName, callback) {
    setTimeout(() => {
        console.log("foo2, after 6 seconds");
        // let newName = fullName.replace(/d|m/g, c => c.toUpperCase());
        // let newName = fullName.replace(/diego/, 'Diego');
        let nameSplit = fullName.split(" ");
        let resultSplit = nameSplit.map(s => {
            let firstLetter = s[0].toUpperCase();
            let rest = s.slice(1);
            let result = firstLetter.concat(rest);
            return result;
        });
        let newName = resultSplit.join(" ");
        callback(newName);
    }, 6000);
}



foo1('hello from foo1', message =>{
    console.log(message);
    foo2('diego maradona today monday linux macos windows10', name => {
        console.log(name);
    });
});


console.log('end');


//callback, freecodecamp
const message = function() {
    console.log("message after 2 seconds");
};
setTimeout(message, 2000);

//anonymous function
setTimeout(function() {
    console.log("Anonymous function, after 4 seconds");
}, 4000);
//Arrow function
setTimeout(() => {
    console.log("Arrow function, after 5 seconds");
}, 5000);