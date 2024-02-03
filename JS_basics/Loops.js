// for loop

for (let i =0; i<5; i++) {
    console.log(i)
}

// while loop

let i = 0;
while(i < 6) {
    console.log(i)
    i++;
}

//do while loop
let a = 0;
do {
    console.log(a)
    a++;
} while (i < 6)


// for in loop - It is used to loop through properties of objects
const obj = {a:1,b:4,c:7}

for (let prop in obj) {
    console.log(prop+ ':' +obj[prop])
}

// for of loop - It is used to loop thorugh iteratable object

var arr = [1,2,3]

for (let prop of arr) {
    console.log(prop)
}

// Map loop - It is a method on array that creates a new array by executing a function on each array

const abb = [1,2,3]

const newarr = arr.map(val => val+2)
console.log(newarr)



