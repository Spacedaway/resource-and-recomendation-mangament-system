/* This is selecting the elements with the class of "navbar", "arrow", and "nav-links" and storing them
in variables. */
let navbar = document.querySelector(".navbar");
let arrow = document.querySelectorAll(".arrow");
let navLinks = document.querySelector(".nav-links");
let userLoggedInEl =
    JSON.parse(localStorage.getItem("isUserLoggedIn")) || false;
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

let photosArrow = document.querySelector(".photos-arrow");
photosArrow.onclick = function () {
    navLinks.classList.toggle("show2");
};

let illustrationsArrow = document.querySelector(".illustrations-arrow");
illustrationsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
};

let iconArrow = document.querySelector(".icon-arrow");
iconArrow.onclick = function () {
    navLinks.classList.toggle("show4");
};

let typographyArrow = document.querySelector(".typography-arrow");
typographyArrow.onclick = function () {
    navLinks.classList.toggle("show5");
};

let inspirationArrow = document.querySelector(".inspiration-arrow");
inspirationArrow.onclick = function () {
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
        if (li_value == "Unsplash") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (
            li_value == "Offset" ||
            li_value == "Drawkit" ||
            li_value == "Humaaans" ||
            li_value == "Vexels" ||
            li_value == "Flaticon" ||
            li_value == "Behance" ||
            li_value == "Font-Squirrel"
        ) {
            document.querySelector("." + li_value).style.display = "block";
        } else {
            console.log("");
        }
    });
}

const mobileLoginEl = document.querySelector("#login-mobile");
const desktopLoginEl = document.querySelector("#login-desktop");
if (userLoggedInEl == true) {
    desktopLoginEl.textContent = "Logged In";
    mobileLoginEl.textContent = "Logged In";
    desktopLoginEl.setAttribute("href", "#");
    mobileLoginEl.setAttribute("href", "#");
    desktopLoginEl.removeAttribute("target");
    mobileLoginEl.removeAttribute("target");
}
