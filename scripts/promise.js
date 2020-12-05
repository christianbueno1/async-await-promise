const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("From promise after 2 seconds");
        // resolve({name: 'joe'});
        reject(new Error("User not logged in"));
    }, 2000);
});
myPromise.then(user => console.log(user)).catch(err => console.log(err.message));

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("we get the data, ok, inside loginUser");
            resolve({userEmail: email});
        }, 3000);
    });
}
function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('from getUserVideos');
            resolve(['video1','video2','video3']);
        }, 2000);
    });
}
function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('inside videoDetails');
            resolve('Title of the video');
        }, 2000);
    });
}

loginUser('miwi@lenovo.com', '123')
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));

let kiwi = 'testing kiwi';
