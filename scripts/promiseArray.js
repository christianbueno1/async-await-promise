const grogu = new Promise(resolve => {
    setTimeout(() => {
        console.log('from inside grogu');
        resolve({videos: [1,2,3,4,5]});
    }, 2000);
});
const ahsoka = new Promise(resolve => {
    setTimeout(() => {
        console.log('from inside ahsoka');
        resolve({user: 'Name'});
    }, 3000);
});
Promise.all([grogu, ahsoka]).then(result => console.log(result));