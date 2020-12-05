function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`making request to ${location}`);
        let movie = 'Wonder Woman 1984';
        if (location === 'Google') {
            resolve('Google says hi', movie);
        }else {
            reject('we can only talk to Google');
        }
    });
}
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`extra infromation ${response}`);
    });
}

// 1rst method
makeRequest('Google')
.then((response, myMovie) => {
    console.log('response received');
    console.log(myMovie);
    return processRequest(response)
})
.then(processedResponse => {
    console.log(processedResponse);
})
.catch(err => console.log(err));

// 2nd method
// async function doWork() {
//     try{
//         const response = await makeRequest('Google');
//         console.log('rrrresponse received');
//         const procesedResponse = await processRequest(response);
//         console.log(procesedResponse);
//         console.log('doWork end');
//     }catch(err){
//         console.log(err);
//     }
// }
// doWork();