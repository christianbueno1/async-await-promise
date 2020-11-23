let fruits = [
    {
        'name': 'kiwi',
        'weight': 76,
        'unit of weight': 'gram',
        'price': 3.5,
        'currency': 'USD',//USD, EUR, GBP, INR
    },
    {
        'name': 'cherry',
        'weight': 12,
        'unit of weight': 'g',
        'price': 2.75,
        'currency': 'EUR',//USD, EUR, GBP, INR
    },
    {
        'name': 'mango',
        'weight': 150,
        'unit of weight': 'g',
        'price': 5.25,
        'currency': 'USD',//USD, EUR, GBP, INR
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

let ans = lookUpFruit("mango", "pricee");
console.log(ans);