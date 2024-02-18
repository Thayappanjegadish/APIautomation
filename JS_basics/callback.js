// Passing a function as an arguement inside another fucntion is called as callback function.


function first(data) {
    var a = "My name is Jegadish"
    data(console.log(a))
}

function data() {
    console.log("Im a Tamilian")
}

first(data)


// example two

function ops(callback) {
    var b = "This function perform operations"
    callback(console.log(b))
    
}

function info() {
    console.log("this function has info for logs")
}

ops(info)



// example 3

function suno(callback) {
    var c = "This is a callback"
    callback(console.log(c))
}

function tuso(){
    console.log("This will be passed as parameter")
}

suno(tuso)