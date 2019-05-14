
// Mouse Over to increase header image contrast

let headerImage = document.querySelector("header img")

headerImage.addEventListener("mouseover", () => {
    headerImage.style = "filter: contrast(120%)"
});

headerImage.addEventListener("mouseleave", () => {
    headerImage.style = "filter: contrast(100%)"
});

// "privacy filter" < Double Click to hide all cont ents on page. Again to reveal.

const body = document.body;
const header = document.querySelector("header");

body.addEventListener("dblclick", function() {
    if (body.style.opacity == ""){
    body.style = "opacity: 0";
    header.style ="opacity: 0";
    }
    else if (body.style.opacity == 0){
        body.style = "opacity: ''";
        header.style = "opacity: ''";
        }
})


// DOM loaded console message
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page is fully loaded with any errors displayed below.');
});


//Copyright Alert 


const footer = document.querySelector(".footer");

footer.addEventListener("click", () => alert("Don't steal my content!"));








let navBar = document.querySelector(".nav")

navBar.addEventListener("click", event => {
      event.preventDefault();
        })  

