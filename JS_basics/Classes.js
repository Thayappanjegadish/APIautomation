// Class is a blue print of objects we can use class to create object.

class emp {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

const emp1 = new emp("Jegadish","28 years");
console.log(emp1.name)
console.log(emp1.age)


function add() {
    a =2;
    b=3;
    console.log(a+b)
}

// Inheritance is a process of inheriting properties of parent class 'extends' keyword is used

class secondclass extends emp {


}

console.log("It adds two numbers" +add)


