// The process of inheriting values of another class is known as inheritance.There are three types of inheritance
// Prototypal inheritance, Pseudo classical inheritance, Functional inheritance.

class Animal {
    constructor(hero, villain) {
        this.hero = hero;
        this.villain = villain;
    }
}

const obj = new Animal("Ranbir","Bobby");
       console.log(obj.hero);
       console.log(obj.villain)


    //    prototype inheritance - An object uses properties of another object using prototype linkage

    let Associate = "Jegadish"

    let Manager = "Jegan"

    let employeeOne = {
        designationOne: Associate
    };

    let employeeTwo = {
        designationTwo: Manager
    };

    employeeTwo.__proto__= employeeOne;
    console.log(employeeTwo.designationTwo)
    console.log(employeeTwo.designationOne)

    // using setProperty
    let AssociateC = "Jegadish"

    let ManagerS = "Jegan"

    let employeeThree = {
        designationOne: AssociateC
    };

    let employeeFour = {
        designationFour: ManagerS
    };

    Object.setPrototypeOf(employeeThree,employeeTwo);
    console.log(employeeThree.designationFour);
    console.log(employeeTwo.designationOne)



 