//`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`//
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`

fetch(url).then(function (response) {
    console.log (response)
})

