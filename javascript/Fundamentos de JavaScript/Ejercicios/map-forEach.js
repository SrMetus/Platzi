//Methods that iterate over an array
//Methos that Do Not modify the original array (inmutability).

//map()

const numbers = [2, 4, 6, 8, 10]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)


//forEach()

const colors = ['red', 'blue', 'black']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//Exercise: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = [32, 24, 18, 20]
const temperaturesInCelsius = temperaturesInFahrenheit.map(Fahrenheit => 
  (5/9) * (Fahrenheit - 32))
  
console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ', temperaturesInCelsius)

//Exercise: Sum od elements in an array

const nums = [1, 2, 3, 4, 5]
let sum = 0
nums.forEach(number => {
  sum += number
})

console.log('Array of Numbers: ', nums )
console.log('Sum of Numbers: ', sum)
  