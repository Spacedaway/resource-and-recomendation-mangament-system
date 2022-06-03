// Global variables
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginLabel = document.querySelector("label.login");
const signupLabel = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupBtn = document.querySelector("#signup-btn");
const errorMsgEl = document.querySelector("#errorMsg");
let userLoggedInEl = false;
let userInfo = [];
userInfo = JSON.parse(localStorage.getItem("userData")) || [];
let currentUser = [];

signupLabel.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginLabel.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
    signupLabel.click();
    return false;
};

signupForm.addEventListener("submit", function () {
    const fnameEl = document.querySelector("#fname").value;
    const lnameEl = document.querySelector("#lname").value;
    const signUpEmailEl = document.querySelector("#signup-email").value;
    const signUpPasswordEl = document.querySelector("#signup-password").value;
    const courseEl = document.querySelector("#course").value;
    let formData = {
        Fname: fnameEl,
        Lname: lnameEl,
        Email: signUpEmailEl,
        Password: signUpPasswordEl,
        Course: courseEl,
    };
    userInfo.push(formData);
    console.log(userInfo);
    localStorage.setItem("userData", JSON.stringify(userInfo));
    signupForm.reset();
});

loginForm.addEventListener("submit", function () {
    const signInEmailEl = document.querySelector("#signin-email").value;
    const signInPasswordEl = document.querySelector("#signin-password").value;
    for (let i = 0; i < userInfo.length; i++) {
        if (
            userInfo[i].Email == signInEmailEl &&
            userInfo[i].Password == signInPasswordEl
        ) {
            errorMsgEl.textContent = "";
            userLoggedInEl = true
            currentUser.push(
                userInfo[i].Fname,
                userInfo[i].Lname,
                userInfo[i].Course,
                userInfo[i].Email
            );
            localStorage.setItem(
                "currentUserInfo",
                JSON.stringify(currentUser)
            );
            localStorage.setItem(
                "isUserLoggedIn",
                JSON.stringify(userLoggedInEl)
            );
            window.open("/profile.html");
        } else if (
            userInfo[i].Email != signInEmailEl ||
            userInfo[i].Password != signInPasswordEl
        ) {
            errorMsgEl.textContent = "Incorrect Email or Password";
        }
    }
    // loginForm.reset();
});
// localStorage.clear();