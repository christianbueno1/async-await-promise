//freeCodeCamp
try {
    console.log('Start of try runs');
    unicycle;
    console.log('End of try runs -- never reached');

} catch (error) {
    console.log('Error has occured: ' + error.stack);
} finally {
    console.log('This is always run');
}
console.log('...Then the execution continues');

//throw
let json = '{"age": 30}';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name');
    }
    console.log(user.name);
} catch (error) {
    console.log("JSON Error: " + error.message);
    console.log('error: ' + error.name);
    console.log(error);
}
