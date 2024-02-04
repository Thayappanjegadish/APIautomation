// Passing a function as an arguement inside another fucntion is called as callback function.


function first(data) {
    var a = "My name is Jegadish"
    data(console.log(a))
}

function data() {
    console.log("Im a Tamilian")
}

first(data)
