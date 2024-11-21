class Persona {
  constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }
  saludar(){
    console.log(`Hola, mi nombre es ${this.nombre} y mi edad es de ${this.edad}`)
  }
}

const persona1 = new Persona("Sebastian", 37)
persona1.saludar()