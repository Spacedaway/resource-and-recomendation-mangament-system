/* This is selecting the elements with the class of "navbar", "arrow", and "nav-links" and storing them
in variables. */
let navbar = document.querySelector(".navbar");
let arrow = document.querySelectorAll(".arrow");
let navLinks = document.querySelector(".nav-links");

/* This is a for loop that is looping through all the arrows and adding an event listener to each one.
The event listener is listening for a click and then toggling the class "showMenu" on the parent of
the arrow. */
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}

/* This is selecting the element with the class of "navbar" and "bx-menu" and storing it in a variable.
Then it is adding an event listener to the variable. The event listener is listening for a click and
then setting the style of the element with the class of "nav-links" to "left: 0". */
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
};

/* This is selecting the element with the class of "nav-links" and "bx-x" and storing it in a variable.
Then it is adding an event listener to the variable. The event listener is listening for a click and
then setting the style of the element with the class of "nav-links" to "left: -100%". */
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
};

/* This is selecting the element with the class of "resources-arrow" and storing it in a variable.
Then it is adding an event listener to the variable. The event listener is listening for a click and
then toggling the class "show1" on the element with the class of "nav-links". */
let resourcesArrow = document.querySelector(".resources-arrow");
resourcesArrow.onclick = function () {
    navLinks.classList.toggle("show1");
};

let categoryArrow = document.querySelector(".category-arrow");
categoryArrow.onclick = function () {
    navLinks.classList.toggle("show2");
};

let cornerstonesArrow = document.querySelector(".cornerstones-arrow");
cornerstonesArrow.onclick = function () {
    navLinks.classList.toggle("show3");
};

let applicationsArrow = document.querySelector(".applications-arrow");
applicationsArrow.onclick = function () {
    navLinks.classList.toggle("show4");
};

let extensionsArrow = document.querySelector(".extensions-arrow");
extensionsArrow.onclick = function () {
    navLinks.classList.toggle("show5");
};

let websitesArrow = document.querySelector(".websites-arrow");
websitesArrow.onclick = function () {
    navLinks.classList.toggle("show6");
};

const li_elements = document.querySelectorAll("#item");
const defaultEl = document.querySelectorAll(".default-section");
/* Then it is looping through all the elements with the id of "item" and adding an event listener to each
one. The event listener is listening for a click and then storing the value of the data-li attribute
in a variable. Then it is looping through all the elements with the class of "default-section" and
setting the style of each one to "display: none". Then it is checking if the value of the data-li
attribute is equal to "html","css" etc and if it is, it is selecting the element with the class of "html" and
setting the style of it to "display: block".*/
for (let i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function () {
        const li_value = this.getAttribute("data-li");
        defaultEl.forEach(function (item) {
            item.style.display = "none";
        });
        if (li_value == "html") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (
            li_value == "css" ||
            li_value == "javascript" ||
            li_value == "react" ||
            li_value == "wordpress" ||
            li_value == "mamp" ||
            li_value == "git" ||
            li_value == "vsc" ||
            li_value == "jquery" ||
            li_value == "bootstrap" ||
            li_value == "atom" ||
            li_value == "iterm2" ||
            li_value == "evernote" ||
            li_value == "wappalyzer" ||
            li_value == "whatfont" ||
            li_value == "perfectpixel" ||
            li_value == "stylebot" ||
            li_value == "css3gen" ||
            li_value == "responsive-design" ||
            li_value == "stackoverflow" ||
            li_value == "github" ||
            li_value == "freecodecamp" ||
            li_value == "scrimba" ||
            li_value == "w3school" ||
            li_value == "frontendmentor"
        ) {
            document.querySelector("." + li_value).style.display = "block";
        } else {
            console.log("");
        }
    });
}
