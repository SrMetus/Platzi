const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
.then(results => { 
    results.forEach(data => console.log(data))
}).catch(error => console.error('error',error))