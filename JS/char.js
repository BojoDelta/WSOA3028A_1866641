/*
The original purpose was to provide the user with a random superhero to cosplay using 
https://superheroapi.com/ however due to complications I was unable to get this API working
in the way that I intended to. Trying to ue the API would constantly result in error 429 Too many requests
and I was unable to access the data in the returned JSON file. I am sorry if the below implementation is
not up to par with the quality expected.

*/


const Jokebutton = document.getElementById("CharBtN")
Jokebutton.addEventListener("click", function () {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((r) => r.json())
        .then((joke) => {
            console.log(joke);
            console.log("got joke");
            doJoke(joke);
        })
        .catch((error) => console.warn("Warning", error));

    const doJoke = (jokeDets) => {
        document.querySelector("h3").innerText = jokeDets.value;

    }

})


