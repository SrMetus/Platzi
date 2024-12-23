/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Ingresa tu usuario")
const password = prompt("Ingresa tu contrase;a")

const userLogin = (username, password) => {
  for (const user of usersDatabase) {
    if (user.username === username && user.password === password) {
      return `Welcome ${username}\n${getUserTimeline(user.username)}`
    }
  }
}

const getUserTimeline = (username) => {
  for (const userTimeline of usersTimeline) {
    if (userTimeline.username.toLowerCase() === username.toLowerCase()) {
      return userTimeline.timeline
    }
  }
}

const message = userLogin(username, password)
console.log(message || 'User or password incorrect')
