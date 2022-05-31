// Global variables
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginLabel = document.querySelector("label.login");
const signupLabel = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupBtn = document.querySelector("#signup-btn");
let userInfo = [];

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
    localStorage.setItem("userData", JSON.stringify(userInfo));
    signupForm.reset();
});

loginForm.addEventListener("submit", function () {
    let userData = []
    userData = JSON.parse(localStorage.getItem("userData"));
    const signInEmailEl = document.querySelector("#signin-email").value;
    const signInPasswordEl = document.querySelector("#signin-password").value;
    for (let i = 0; i < userData.length; i++) {
        if (
            userData[i].Email == signInEmailEl &&
            userData[i].Password == signInPasswordEl
        ) {
            let newUserArr = []
            const usersName = `${(userData[i], Fname)} ${(userData[i], Lname)}`;
            const usersCourse = `${(userData[i], Course)}`;
            newUserArr.push(usersName, usersCourse)
            console.log(newUserArr)
            window.open("/profile.html");
        } else {
            alert("nope");
        }
    }
    loginForm.reset();
});
// localStorage.clear();