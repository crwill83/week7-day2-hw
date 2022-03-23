//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// const values = Object.values(person3)
// console.log(values)

for (const value in person3) {
    if (person3.hasOwnProperty(value)) {
        console.log(value)
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }
    this.addOneYear = () => {
        this.age += 1
    }
}

p1 = new Person('Johnny', 18)

console.log(p1.printInfo())
console.log(p1.addOneYear()) // adds one year
console.log(p1.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const funcBig = () => {console.log('Big Word')}
const funcSmall = () => {console.log('Small number')}

const isLongerThanTen = (num) => {
    return new Promise((resolve, reject)=>{
        if (num > 10){
            resolve(funcBig)
        }
        else {
            reject(funcSmall)
        }
    })
}

isLongerThanTen(11).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
