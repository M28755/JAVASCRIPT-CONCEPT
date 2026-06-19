

const arr1 = Array.from('Jaguar')
console.log(arr1)
console.log(arr1.length)
console.log(arr1.join('')) // it will join all the array elements into a string


//CONVERTING NODELIST TO ARRAY
const NodeList = document.querySelectorAll('#myList li')
/* const textList = Array.from(NodeList, (li) => {
    return li.innerText
})
console.log(textList) */
document.getElementById('demo').innerHTML = Array.from(NodeList, (li) => {
    return li.innerText
})



// 2. Using Array.from() with a mapping function (ES6)
// The second argument is optional.
/* 
console.log('----------------------')
console.log('Using Array.from() with a mapping function (ES6)')
console.log('----------------------')

const mapFnArr = Array.from([1, 2, 3, 4, 5], (x) => x * 2)
console.log(mapFnArr)

const set = new Set(['a', 'b', 'c', 'd', 'e'])
const setArr = Array.from(set)
console.log(setArr)

const arrLike = { length: 5, 0: 10, 1: 20, 2: 30, 3: 40, 4: 50 }
const arrLikeArr = Array.from(arrLike)
console.log(arrLikeArr)

const stringAndLength = Array.from('Jaguar', (char, index) => `${char}-${index}`)
console.log(stringAndLength) */