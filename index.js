import dogs from "./dogData.js"
import Dog from "./Dog.js"

let hasBeenSwiped = false
let hasBeenLiked = false
let dateArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const getNextDate = () => {
    const nextDate = dogs[dateArray.shift()]
    return nextDate ? new Dog(nextDate) : ""
}

function hasLiked(){
    if (!hasBeenLiked){
        hasBeenLiked = true
        getDogs = getNextDate()
        renderLikeBadge()
        setTimeout(() => {
            hasBeenLiked = false
            document.getElementById("like-badge").classList.remove("display")
            document.getElementById("like-badge").classList.add("badges")
            renderDogs()
        }, 1500);
    }
}

function hasSwiped(){
    if (!hasBeenSwiped){
        hasBeenSwiped = true
        getDogs = getNextDate()
        renderNopeBadge()
        setTimeout(() => {
            hasBeenSwiped = false
            document.getElementById("reject-badge").classList.remove("display")
            document.getElementById("reject-badge").classList.add("badges")
            renderDogs()
        }, 1500);
    }
}

const renderLikeBadge = () => {
    document.getElementById("like-badge").classList.remove("badges")
    document.getElementById("like-badge").classList.add("display")
}

const renderNopeBadge = () => {
    document.getElementById("reject-badge").classList.remove("badges")
    document.getElementById("reject-badge").classList.add("display")
}

document.getElementById("like-icon").addEventListener("click", hasLiked)
document.getElementById("reject-icon").addEventListener("click", hasSwiped)

let getDogs = getNextDate()

const renderDogs = () => document.getElementById("dog-stage").innerHTML = getDogs.setDogsHtml()

renderDogs()