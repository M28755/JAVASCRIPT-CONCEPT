
//Creating and initializing array
// 1.  Using Array literal
console.log("Using Array literal")
console.log('-----------------------')
const arr = []
const arr2 = [1, 2, 3, 4, 5]
const stringArr = ["a", "b", "c", "d", "e"]
const mixedArr = [1, "a", true, null, undefined, function () { }, {}]


console.log(arr)
console.log(arr2)
console.log(stringArr)
console.log(mixedArr)


// 2.  Using Array constructor 
console.log("Using Array constructor ")
console.log('-----------------------')
const constructorArr = new Array()
const constructorArr2 = new Array(5)
const constructorArr3 = new Array(1, 2, 3, 4, 5)

setTimeout(() => {
    console.log(constructorArr)
    console.log(constructorArr2)
    console.log(constructorArr3)
}, 4000)