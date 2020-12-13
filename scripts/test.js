let myMessage = 'hello my friends, today is a new day';
let mySplit = myMessage.split(" ");

console.log(mySplit.length);
console.log(myMessage[0]);
console.log(myMessage[myMessage.length -1]);

let newM = myMessage.toUpperCase();
console.log(newM);
let firstLetter = newM[0];
let restMessage = myMessage.slice(1);
let joinM = firstLetter.concat(restMessage);
console.log(joinM);

let resultM = mySplit.map(s => {
    let upper = s.toUpperCase();
    let firstLetter = upper[0];
    let rest = s.slice(1);
    let join = firstLetter.concat(rest);
    return join;
});
console.log(resultM);
let oneR = resultM.join(' ');
console.log(oneR);

console.log('2020-12-07');
//synchronous
console.log('clicke here');
console.log('sending data');
console.log('processing');
console.log('receiving data');
//asynchronous
function myOperation() {
    console.log('task 1 is ready now');
}
console.log('click here again');
setTimeout(myOperation, 11000);
console.log('second task');
console.log('third task');
console.log('end');

//Dev Ed again
function myCallBack() {
    return '{song: "in my place", name: "coldplay"}';
}

function myrequest(data) {
    setTimeout(myCallBack, 2000);
}

console.log('start 2020-12-08');

//console.log('finish');


//anonymous function expressions
// function foo() {
//     console.log('anonymous function')
// }
// foo();

// let f = function foo() {
let f = function foo() {
    console.log('anonymous function')
};
f();
f = 'hello'
console.log(f);
// foo();

let addF = function (num1, num2) {
    return num1 + num2;
}
console.log(addF(5,6));

//+++
let printName = function(name) {
    console.log('hello', name);
};
let executor = function(fn, name) {
    fn(name);
    // console.log(fn);
};
executor(printName, 'tommm');

//+++ arrow function
let printName2 = name => {
    console.log('I am ' + name);
};
let executor2 = (callback, name) => {
    callback(name);
};
executor2(printName2, 'Batman');
console.log('my awesome web app');

let f2 = name => ({name: name});
let obj1 = f2('pam');
console.log(obj1);
let newTag = `<h3>${obj1.name}</h3>`
setTimeout(() => document.body.innerHTML = newTag, 5000);
//create element
let newBox = () => {
    let ele1 = document.createElement('div');
    document.body.appendChild(ele1);
    ele1.innerHTML = 'box box box one';
    ele1.style.background = '#e2e2e2';
    
    let ele2 = document.createElement('div');
    document.body.appendChild(ele2);
    ele2.innerHTML = 'box box two';
    ele2.style.border = '1px solid blue';
    ele2.style.margin = '1.5em';
    
    let ele3 = document.createElement('div');
    document.body.appendChild(ele3);
    ele3.innerHTML = 'box box three';
    ele3.style.border = '1px dashed red';
    ele3.style.width = '400px';
    
    ele2.style.color = '#aa5533';
    ele1.style.padding = '1em';

    let ele4 = document.createElement('div');
    ele4.innerHTML = 'bo bob four';
    ele4.style.backgroundColor = '#ee9944';
    ele4.style.padding = '2em';
    ele4.style.margin = '1em';
    ele4.style.width = '75%';
    ele4.style.color = '#424242';
    document.body.appendChild(ele4);

    console.log('2020-12-10');
    let myDiv = document.createElement('div');
    let myP = document.createElement('p');
    myP.className = 'product-card';
    document.body.appendChild(myDiv);
    let bodyContentText = document.body.textContent;
    console.log(bodyContentText);
    myDiv.appendChild(myP);
    myP.insertAdjacentText("afterbegin",'Wonder Woman 1984');
    let year = document.createElement('h1');
    year.innerHTML = '1986';
    myP.insertAdjacentElement('beforeend', year);
    ele1.className = 'font-size';
    
    //object, movie streaming
    let movie = {
        name : 'Spider-Man: Into the Spider-Verse',
        time: '1h 56m',
        'release date': 2018,
    };
    let today = new Date();
    console.log(today);

    //unix time stamp
    //unix epoch, seconds
    //javascript date, miliseconds
    let unixEpoch = 1114405200; //2005-04-25T05:00:00+00:00 in ISO8601, international UTC 
    let dateMiliSeconds = unixEpoch * 1000; 
    let lotoFlower = `{"name": "flor de loto", "color": "yellow", "date": ${dateMiliSeconds}}`;
    console.log(lotoFlower);
    let lotoFlowerObject = JSON.parse(lotoFlower);
    console.log(lotoFlowerObject.date); //use the system UTC 
    let temp = new Date(lotoFlowerObject.date);
    console.log(temp); // use the system UTC, -05
    console.log(Date.now()); 
    console.log(new Date(2020,04,04));
    console.log(today.getFullYear(), temp.getFullYear() );
    console.log(today.getMonth(), temp.getMonth());
    console.log(today.getDate(), temp.getDate());
    console.log(today.getMinutes(), temp.getMinutes());
    console.log(today.getSeconds(), temp.getSeconds());
    console.log(today.getUTCHours(), temp.getUTCHours()); //international UTC
    console.log(today.toISOString(), temp.toISOString());
    console.log(today.toLocaleString('es-EC'), temp.toLocaleString('es-EC'));
    

};
setTimeout(newBox, 8000);
