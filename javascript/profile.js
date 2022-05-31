import { usersName } from "/login.js";
import { usersCourse } from "/login.js";

let navbar = document.querySelector(".navbar");
let arrow = document.querySelectorAll(".arrow");
let navLinks = document.querySelector(".nav-links");
const profileDescEl = document.querySelector("#profile-description");
const profileNameEl = document.querySelector("#profile-name");

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

if (usersCourse != "") {
    profileDescEl.textContent = `I am a creative graphic designer ${usersCourse}`;
} else {
    profileDescEl.textContent = "";
}
profileNameEl.textContent = usersName;
