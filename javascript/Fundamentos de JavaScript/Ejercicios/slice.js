//Methos that Do Not modify the original array (inmutability).
//slice()

const colors = ['Blue', 'Yellow', 'Red', 'Pink', 'White', 'Black']
console.log(colors.slice(1))
console.log(colors.slice(1, 4)) // index 4 - 1 
console.log(colors.slice(1, 5))  // index 4 - 1
console.log(colors.slice(-2)) //atras hacia delante
console.log(colors.slice(2, -1)) 
