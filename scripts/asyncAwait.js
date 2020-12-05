// function loginUser(email, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("we get the data, ok, inside loginUser");
//             resolve({userEmail: email});
//         }, 3000);
//     });
// }
// function getUserVideos(email) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('from getUserVideos');
//             resolve(['video1','video2','video3']);
//         }, 2000);
//     });
// }
// function videoDetails(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('inside videoDetails');
//             resolve('Title of the video');
//         }, 2000);
//     });
// }

async function displayUser() {
    const loggedUser = await loginUser('joe@lenovo.com', 1234);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}
displayUser();
console.log(kiwi);