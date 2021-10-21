const title = document.querySelector("h1")
const words = document.querySelector(".words")
const colors = document.querySelector(".colors")

words.addEventListener('click', function(){
    title.textContent += " Blah"
})