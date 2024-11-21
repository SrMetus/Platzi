// aquí declaramos la función multiplicar
function multiplicar(a, b) {
	return a * b;
}

// luego podemos llamarla para multiplicar 3 por 4
console.log(multiplicar(3, 4));


let cualquierNombreDeVariable = function(a, b) {
	return a * b;
}

console.log(cualquierNombreDeVariable(3, 5));

console.log((function(a, b) {
	return a * b;
})(2, 3));