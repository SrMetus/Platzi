function getPromedio(array) {
	let suma = array.reduce((a, b) => a + b, 0);
	return suma / array.length;
}
let promedio = getPromedio([2, 4, 5, 12, 7]);

function getMasJoven(array) {
	return array.reduce((a, b) => a.age < b.age ? a : b);
}

function getInfoPersona(nombre, personas) {
	return personas.find(persona => persona.name === nombre);
}



// Corrección: Definir un array adecuado de objetos para la función getMasJoven
let personas = [{ name: "John", age: 20 }, { name: "Mary", age: 21 }];
let masJoven = getMasJoven(personas);

let john = getInfoPersona("John", personas);
let mary = getInfoPersona("Mary", personas);

console.log({ promedio, masJoven, john, mary });