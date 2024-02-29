// var - if it is declared in global level it can be accessed from anywhere
// If declared inside a function it cannot be accessed outside from function


function multiply (a,b) {
    return a*b;
}

let value = multiply(3*3)
console.log(value)

// String - collection of characters

let day = 'tuesday'
console.log(day)
console.log(day.length)

let sub = day.slice(0,4)
console.log(sub)

console.log(day[1])

let spiltday = day.split("s")
console.log(spiltday)

let date = '27'
let nextdate = '23'

// To convert string to integer

let diff = parseInt(date) - parseInt(nextdate)
console.log(diff)

// Integer to String

let sac = diff.toString
console.log(sac)

// Concatentation

let con = "Today is" + day
console.log(con)

let newquote = day+ "Is a funday day"
console.log(newquote)

// program to count the number of occurences of a word in a string

let count = 0;
let valu = newquote.indexOf('day')
while(valu!==-1){
    count++
    value = newquote.indexOf("day",value+1)
}
console.log(count)








