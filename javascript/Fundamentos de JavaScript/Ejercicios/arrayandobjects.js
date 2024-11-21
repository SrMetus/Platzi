let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //ordena con logica de string
console.log(fruits);
fruits.reverse(); //invierte la array
console.log(fruits);

let puntos = [40, 100, 1, 5, 25, 10]
puntos.sort(
  function(a, b) { //es una comparacion de
    return a - b // numeros para ordenar de
});  //menor a mayor
console.log(puntos)

let autos = [
  {tipo: 'Volvo', ano: 2016},
  {tipo: 'Saab', ano: 2001},
  {tipo: 'BMW', ano: 2020}
]
autos.sort(function(a, b) {
  return a.ano - b.ano
});
console.log(autos)