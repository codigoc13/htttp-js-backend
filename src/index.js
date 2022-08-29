//Haciendo una petición http a hosting
const jokeUrl = 'https://api.chucknorris.io/jokes/random'

// fetch(jokeUrl).then((resp) => {
//   //   console.log(resp)
//   resp.json().then((data) => {
//     console.log(data.id)
//     console.log(data.value)
//     // Desestructurar
//   })
// })

fetch(jokeUrl)
  .then((resp) => resp.json())
  .then(({ id, value }) => {
    console.log(id)
    console.log(value)
  })
