// console.log("javescript")


const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");

const changeThemeButton = document.querySelector("#change-theme");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

//button toggle
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "Nothing";
})


function changeButtonText() {
    if(document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to light";
    }
    else {
        changeThemeButton.textContent = "Switch to dark";
    }
}


changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeButtonText();
})



img1.addEventListener("click", () => {
    img2.classList.remove("hidden");
})
img2.addEventListener("click", () => {
    img3.classList.remove("hidden");
})