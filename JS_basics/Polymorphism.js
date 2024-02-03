class firstclass {
    add() {
        console.log("First method")
    }
}

class secondclass extends firstclass {
    add() {
        console.log(30+59)
    }
}

class thirdclass extends secondclass {
    add() {
        console.log("A+B")
    }
}

let ob = new firstclass();

let ob1 = new secondclass();

let ob2 = new thirdclass();

ob.add();
ob1.add();
ob2.add();