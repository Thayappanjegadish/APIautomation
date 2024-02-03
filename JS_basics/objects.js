const a = new Object()
a.first = 38
console.log(a)

let Office = {
    name: 'Best',
    location: 'Chennai',
    established: '2027',
    displayinfo : function () {
        console.log(`${Office.name} was established in ${Office.location} at ${Office.established}`)
    }
}

Office.displayinfo();

for (let key in Office){
    console.log(key)
}


console.log(Office.location)