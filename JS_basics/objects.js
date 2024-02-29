// Object is a collection of properties where all the data is stored in a key value pair

const cls = require('./Classes')
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

let person = {
    firstname: 'Jegadish',
    lastname: 'Thayappan',
    age:'28',

    fullname : function() {
        console.log(this.firstname+this.lastname)
    }
}

console.log(person.fullname())

// print the value of the objects
for(let key in person){
    console.log(person[key])
}

