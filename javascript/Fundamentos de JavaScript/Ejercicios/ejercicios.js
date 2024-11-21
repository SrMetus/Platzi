const ejercicioUno = (a, b, operation) => {
  switch(operation){
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multi":
      return a * b;
    case "div":
      return a / b;
    default:
      console.error(`Operacion ${operation} no valida`);
  }
}
console.log(ejercicioUno(5, 10, "resta"))

const ejercicioDos = (a, b) => {
  let num = [];
  for(let i = a; i <= b; i++){
    if(i % 2 === 0){
      num.push(i);
    }
  }
  console.log(num)
}

ejercicioDos(1, 200)


const ejercicioTres = (a, x = 12) => {
  for(let i = 1; i <= x; i++){
    console.log(`${a} x ${i} = ${a * i} \n`)
  }
}

ejercicioTres(5, 20);

const ejercicioCuatro = () => {
  let num = [];
  let multiplos = [];
  for(let i = 1; i <= 100; i++){
    num.push(i);
  }
  console.log(`Arreglo del 1 al 100: ${num}`)
  num.filter((element) => {
    if(element % 3 === 0) {
     multiplos.push(element)
    }
  });
  console.log(multiplos)
}

ejercicioCuatro();

const ejercicioCinco = () => {
  let num = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(`Numero Random: ${num}`)
  let mitad = num / 2;
  let doble = num * 2;
  let raiz = Math.sqrt(num)
  console.log(`La mitad es ${mitad}, el doble es ${doble} y la raiz es ${raiz}`)
}

ejercicioCinco();

const ejercicioSeis = (a = " 08 nov 2024") => {
  let cumple = new Date(a);
  let hoy = new Date();
  let diasRestantes = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24))
  console.log(`Mi cumpleanos es ${cumple} y faltan ${diasRestantes} dias`);
}
ejercicioSeis();

const ejercicioSiete = (text = "Hola mundo") => {
  let words = text.split(" ")
  console.log(words)
}
ejercicioSiete();
ejercicioSiete("Esto es una entrevista")

const ejercicioOcho =() => {
  const personas = [
    {
      nombre: "Luis",
      apellido: "Santos",
      edad: 15
    },
    {
      nombre: "sebastian",
      apellido: "Gaggero",
      edad: 36
    },
    {
      nombre: "Luis",
      apellido: "Perez",
      edad: 14
    },
    {
      nombre: "Jonnathan",
      apellido: "Santos",
      edad: 18
    }
  ];
  personas.filter((element) => {
    if(element.nombre === "Luis") console.log(`${element.nombre} ${element.apellido}`)
  })
  personas.filter((element) => {
    if(element.edad >= 18) console.log(`${element.nombre} ${element.apellido} tiene ${element.edad} y es mayor de edad`)
  })
}
ejercicioOcho();