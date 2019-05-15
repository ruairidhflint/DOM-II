
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


// navBar.addEventListener("mouseover", () => {navBar.style = "color: red;"})

const navBar = document.querySelectorAll(".nav a")
let navLinks = Array.from(navBar);

navLinks.forEach(function(element){
    element.addEventListener("mouseover", (event) => event.target.style.color = "red")
})
navLinks.forEach(function(element){
    element.addEventListener("mouseleave", (event) => event.target.style.color = "inherit")
})

// turn images black and white on click

const allImages = document.querySelectorAll("img");
const imageArray = Array.from(allImages);

imageArray.forEach(function(element){
    element.addEventListener("click", event => event.target.style.filter = "grayscale()")
})


// h2 given border on mouseover

const headings = document.querySelectorAll("h2");
const headingArray = Array.from(headings);

headingArray.forEach(function(element){
    element.addEventListener("mouseover", event => event.target.style = "border: 1px black dashed;");
    element.addEventListener("mouseleave", event => event.target.style = "border: 0px black dashed;")
})


// give buttons error change

const button = document.querySelectorAll(".btn");
const buttonArray = Array.from(button);


buttonArray.forEach(function (element){
element.addEventListener("click", function(x){
  x.target.textContent = ":-("
  x.stopPropagation();
})
}
)

// logo inflates

const logo = document.querySelector('h1');

logo.addEventListener("mouseover", expand);


logo.addEventListener("mouseleave", x => {x.target.style.fontSize = "4rem"});

function expand(x){
    x.target.style.fontSize = "6rem";
}


/// NavBAR disabled. 

const navigation = document.querySelector(".nav")

navigation.addEventListener("click", event => {
      event.preventDefault();
        })  



// 

const bottomS = document.querySelector(".content-pick")

bottomS.addEventListener("click", function(x){
    console.log("bottom clicked")
}
)
