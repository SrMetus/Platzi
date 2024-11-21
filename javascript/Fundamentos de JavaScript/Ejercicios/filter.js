const amigos = () => {
  let amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
  
  let misAmigos = amigo.filter(nombre => nombre.length === 4);
  return misAmigos;
}
console.log(amigos());