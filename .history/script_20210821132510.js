const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generatJoke()

function generateJoke{
    const config = {
            headers:{
                'Accept': 'aplication/jason'
            }
        }
    fetch('https://www.piadasnet.com',config)
    .then(res => res.jason())
    .then(data => console.log(data))
}