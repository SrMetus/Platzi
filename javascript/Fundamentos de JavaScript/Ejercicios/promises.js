/*
  Promise Una promesa es un objeto que representa la eventual finalizacion (o falla) de una operacion asincrona.

  Estados
  Pending: Estado inicial, ni cumplida ni rechazada.
  Fullfilled: La operacion se completo con exito.
  Rejected: La operacion fallo.
  
  Callbacks
  resolve: La promesa se resulve de manera satisfactoria.
  reject: La promesa no se puede resolver.
  
  Metodos principales
  then(): maneja el caso de de exito.
  catch(): maneja los errores.
  finally(): se ejecuta al finalizar, independiente al resultado.
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessful = true
    if (!operationSuccessful) {
      resolve("La operacion fue exitosa!")
    } else {
      reject("Fallo la operacion")
    }
  }, 2000)
})

promise
  .then((successMessage) => {
    console.log(successMessage)
})
  .catch((errorMessage) => {
    console.error(errorMessage)
})