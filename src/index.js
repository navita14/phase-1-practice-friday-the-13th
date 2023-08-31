const navMovieList = document.querySelector("#movie-list")
const movieTitle = document.querySelector("#title")
const yearReleased = document.querySelector("#year-released")
const movieDesc = document.querySelector("#description")
const movieImg = document.querySelector("#detail-image")
const watchBtn = document.querySelector("#watched")
const form = document.querySelector("#blood-form")
const bloodInput = document.querySelector("#blood-amount")
const spanAmount = document.querySelector("#amount")

fetch(" http://localhost:3000/movies")
.then(res => res.json())
.then(data => {
    data.forEach(movieOne => {
        const img = document.createElement("img");
        img.src = data.image;
        navMovieList.append(img)

        img.addEventListener("click", e => {
            addAllMovies(movieOne)
        })
    })

    addAllMovies(data[0])
})

function addAllMovies(movie) {
    movieTitle.textContent = movie.title
    yearReleased.textContent = movie.release_year
    movieDesc.textContent = movie.description
    movieImg.src = movie.image

}

watchBtn.addEventListener("click", e => {
    watchBtn.textContent = (watchBtn.textContent === "Watched") ? "Unwatched" : "Watched"
})

let num = 0 

form.addEventListener("submit", e => {
    e.preventDefault();
    // spanAmount.textContent = num += parseInt(bloodInput.value)
    const newbloodAmount = bloodInput.value
    spanAmount.textContent = newbloodAmount

})
