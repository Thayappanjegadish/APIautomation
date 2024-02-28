var marks = [20,30,40,50,60,70]
console.log(marks[2])
marks[3] = 42

console.log(marks)

console.log(marks.length)

marks.push(65)

console.log(marks)

marks.pop()

console.log(marks)

marks.unshift(10)

console.log(marks)

console.log(marks.indexOf(50))

marks.includes(120)

marks.slice(2,5)

for (let i=0; i<marks.length; i++) {
    console.log(marks[i])
}

var sum = 0;

for (let i =0; i< marks.length; i++) {
    sum = sum + marks[i]
}

console.log(sum)

// reduce filter map

// Reduce is a inbuilt function which is used to reduce the array to single value.

var total = marks.reduce((sum, mark)=> sum+mark,0)

console.log(total)

// to find even numbers in an array and create an new array

var scores = [12,13,14,15,16]

var evenscores = []

for (let i =0; i< scores.length; i++) {

    if (scores[i]%2 == 0){
        evenscores.push(scores[i])
    }
}

console.log(evenscores)

// filter method is used to filter elements from array based on a condition

var newfilterevenscores = scores.filter(scores=>scores%2==0)
console.log(newfilterevenscores)


// Map

let Mappedarray = newfilterevenscores.map(scores=>scores*3)
console.log(Mappedarray)

var arraysum = Mappedarray.reduce((sum,val)=>sum+val,0)
console.log(arraysum)

var fruits = ["banana","mango", "pomegrante", "apple"]

fruits.sort()

console.log(fruits)












