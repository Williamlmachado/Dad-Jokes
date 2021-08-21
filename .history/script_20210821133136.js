const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke(){
    const config = {
            headers:{
                'Accept': 'aplication/jason'
            },
        }
    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json()).then((data) => {jokeEl.innerHTML}
}