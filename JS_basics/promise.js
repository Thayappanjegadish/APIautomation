// Promise is used while dealing with multiple asynchronous operations where callbacks can create callback hell.Resolve and Reject are two parameters 
// promise takes one argurment and that callback fucntion takes two parameters resolve and reject
// then is a callback function that will be executed when promise is resolved
// finally is a method that is executed regardless of whether promise is resolved or not

let promise = new Promise(function(resolve,reject) {
        const a = "geeksforgeeks";
        const b = "geeksforgeeks"
 
        if (a===b) {
            resolve()
        }else {
            reject();
        }
});

promise.then(function () {
     console.log('Success, you are a geek')
}).
catch(function() {
    console.log('Some error has occured')
});


// second example

var Naam = "jegadish";

let obj = new Promise(function(resolve,reject) {

    if (Naam) {
        resolve();
    } else {
        reject();
    }

});

promise.then(function() {
    console.log("Success your name is jegadish")
}).catch(function() {
    console.log("SOme error has occured")
}).finally(function() {
    console.log("Execution of code is done")
})