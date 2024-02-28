// An array is a special variable which can hold more than one values

var bikes = ["RE","FZ","Duke", 56]

for (let i =0 ; i<bikes.length; i++) {
    console.log(bikes[i])
}

bikes.push("R15")

console.log(bikes)

bikes.pop()

console.log(bikes)

var a = bikes.slice(0,2)

console.log(a)


