/*
  estructura de datos
  
  key / value
  
  objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos()
  }
*/

const persona = {
  nombre: "Sebastian",
  edad: 37,
  direccion: {
    calle: "Av. Los Mandriles 69",
    ciudad: "Con Con",
    pais: "Chile"
  },
  saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`)
  }
}

console.log(persona)
persona.saludar()

//agregar propiedad al objeto
persona.telefono = "569-569-5695"
console.log(persona)

//agregar metodo
persona.despedir = () => {
  console.log("Adios");
}

console.log(persona)
persona.despedir()

//eliminar propiedad
delete persona.telefono

//eliminar metodo
delete persona.despedir

console.log(persona)
