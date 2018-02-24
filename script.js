console.log('Hello Piotr!')
//string
var textVariable = "Matrusz"
console.log(textVariable)
//number
var numberVariable=43
console.log(numberVariable)


var booleanVariable = true
console.log(booleanVariable)

var nullVariable = null
console.log(nullVariable)

var undefinedVariable = undefined
console.log(undefinedVariable)

//object with data
var simplestObj = { 
    name: "Piotr",
    lastname: "Kassin"
}
console.log(simplestObj)
console.log(simplestObj.name)

var nastedObj = { 
    name: "Piotr",
    car: {
        brand: "Audi",
        model: 3
    }

}
console.log(nastedObj)
console.log("Brand: "+nastedObj.car.brand)
nastedObj.car.brand=99
console.log("Brand2: "+nastedObj.car.brand)

//arrays
var simpleArray = ["jeden",
    {name:'"Ala"', array: [1,4,"wow"]},
3,4]
console.log(simpleArray)
console.log(simpleArray[0])
console.log(simpleArray[1].name)
console.log(simpleArray[1]["name"])
console.log(simpleArray[1].array[2])
