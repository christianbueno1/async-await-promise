console.log('--2020-12-13');
let todayNow2 = Date.now(); //number 
let todayDate2 = new Date();
console.log(todayNow2, todayDate2);
let dateDate3 = new Date(todayNow2);
console.log(dateDate3);
let dateDate4 = new Date(2015,7,15,16,45);
console.log(dateDate4);
console.log(dateDate4.getUTCHours());
console.log(dateDate4.toISOString());