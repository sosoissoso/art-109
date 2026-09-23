// console.log("javescript")


const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");

changeHeaderButton.addEventListener("click", () => {
        header.innerHTML = "wow. so impressive.";


})





document.querySelector("#image-0").addEventListener("click", function(){
    document.querySelector("#image-0").style.visibility = "hidden"
})

document.querySelector("#image-1").addEventListener("click", function(){
    document.querySelector("#image-1").style.visibility = "hidden"
})

document.querySelector("#image-2").addEventListener("click", function(){
    document.querySelector("#image-2").style.visibility = "hidden"
})

document.querySelector("#image-3").addEventListener("click", function(){
    document.querySelector("#image-3").style.visibility = "hidden"
})



















// console.log("hello there");

// let pageTitle = document.querySelector("#page-title")
// let headerTitle = document.querySelector("header")
// let bodyTitle = document.querySelector("body")

// setTimeout(function () {
//     pageTitle.style.color = "pink";
//     console.log("timeout works");
// }, 3000);

// // click event changes background colour
// headerTitle.onclick = function () {
//     console.log("clicked header")
//     bodyTitle.style.backgroundColor = "black"
// }

//changing without storing in variables

// setTimeout(function () {
//     document.querySelector("#page-title").style.color = "pink";
//     console.log("timeout works");
// }, 3000);

// // click event changes background colour
// document.querySelector("header").onclick = function(){
//     console.log("clicked header")
//     document.querySelector("body").style.backgroundColor = "black"
// }
