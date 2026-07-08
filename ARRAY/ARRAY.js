let arr = ['Apples', 'Banana', 'Mango', 'Pineapple', 'Orange', 'Litchi', 'Grapes', 'Cherry', 'Avocado', 'Watermelon']

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ARRAY METHODS
arr.push('cawpeas');//add an element to the end of an array

//filter array
console.log("\n \n ====================================================")
console.log("\n FILTERING ARRAY")
const filtering = arr.filter((element) => {

    const result = element.includes('a')

    return result;
})
console.log(filtering.length)
if (filtering.length !== arr.length) {
    console.log("The filtered array is:", filtering);

}
else {
    console.log("No element was filtered");
}

//looping through an array
console.log("\n \n ====================================================")
console.log("\n LOOPING THROUGH ARRAY \n")

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 5) {
        console.log(nums[i])


    }

}
console.log("\n \n ====================================================")
console.log(arr)
console.log(arr.length);//return the length of an array
console.log(arr[arr.length - 1])//access the last element of an array
console.log(arr.at(-2))//access the second last element of an array
