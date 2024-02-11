// JS map is a collection  of elements where each value is stored in a key value pair. Map objects can hold both object and primitive value 
// as either key or value. 

let mapobj = new Map([ ["laptop", 1000 ],
["phone", 800],
["Tablet", 500]]);

 console.log(mapobj)

//  for each

 mapobj.forEach((values,keys) => {
       console.log("Values:", values + ", Keys:", keys)
 })

//  .set() adds elements to the map using 

let add = new Map()
add.set("Firstname", "Jegadish",);
add.set("lastname","Thayappan");
add.set("Websites","www.geeksforgeeks.com")

console.log(add)


