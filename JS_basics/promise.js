// Promise is used while dealing with multiple asynchronous operations where callbacks can create callback hell.Resolve and Reject are two parameters 
// promise takes one argurment and that callback fucntion takes two parameters resolve and reject

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
