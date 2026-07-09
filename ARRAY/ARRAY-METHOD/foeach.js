const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numbers.push(11);///add an element to the end of an array
console.log(numbers);

//forEach()

let sum = 0;

numbers.forEach((item, index) => {
    console.log(`[${index}] = ${item}`);

    sum += item;

})

console.log(sum)

const letters = [ 'a', 'c', 'b', 'a', 'b', 'b', 'c', 'a', 'a', 'd'];

const count = {}//object to count

letters.forEach(item =>{

if(count[item]){
    count[item]++
}else{
    count[item] = 1;
}


})
console.log(count);
