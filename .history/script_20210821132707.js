const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke{
    const config = {
            headers:{
                'Accept': 'aplication/jason'
            },
        }
    fetch('https://www.piadasnet.com',config).then(res => res.json()).then(data => console.log(data))
}