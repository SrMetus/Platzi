//expresion ternaria
6 >= 5 ? "True" : "False"

//funcion flecha
const myComponent = () => {
  let a = "Hello"
  return a
}
let result = myComponent()
console.log(result)

//hook useState
const [superVariable, setSuperVariable] = useState(null);
<button onClick={() => setSuperVariable('Hello')}></button>