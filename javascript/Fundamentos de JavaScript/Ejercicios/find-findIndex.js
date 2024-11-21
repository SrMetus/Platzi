//Methods that iterate over an array
//Methos that Do Not modify the original array (inmutability).

//find()

const multipleOf5 = [5, 10, 15, 20]
const fistNumberGreaterThen10 = multipleOf5.find(number => number > 10)
console.log(multipleOf5)
console.log(fistNumberGreaterThen10)

//findIndex()

const randomNumber = [6, 24, 54, 50, 16]
const indexNumber = randomNumber.findIndex(number => number > 50)
console.log(randomNumber)
console.log(indexNumber)
