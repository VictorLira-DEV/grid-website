import './contact.scss';

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const email2 = document.getElementById("email2");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const cellphone = document.getElementById("cellphone");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    chechInputs();
});

function chechInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const cellphoneValue = Number(cellphone.value);
    //username
    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }
    //email
    if (emailValue === "") {
        setErrorFor(email, "E-mail cannot be blank");
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "E-mail is not valid");
    } else {
        setSuccessFor(email);
    }
    //email2
    if (email2Value !== emailValue || email2Value == "") {
        setErrorFor(email2, "E-mail cannot be blank");
    } else {
        setSuccessFor(email2);
    }
    //password
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }
    //password2
    if (passwordValue === "" || passwordValue !== password2Value) {
        setErrorFor(password2, "This password is not valid");
    } else {
        setSuccessFor(password2);
    }
    //cellphone
    if (cellphoneValue === 0) {
        setErrorFor(cellphone, "cellphone cannot be blank");
    } else if (!isNumeric(cellphoneValue)) {
        setErrorFor(cellphone, "cellphone cannot be blank");
    } else {
        setSuccessFor(cellphone);
        console.log(cellphoneValue);
    }
}

function isNumeric(num) {
    return !isNaN(num);
}

function setErrorFor(input, message) {
    const formInside = input.parentElement;
    const small = formInside.querySelector("small");
    small.textContent = message;

    input.parentElement.classList.remove("success");
    input.parentElement.classList.add("error");
}

function setSuccessFor(input) {
    const formInside = input.parentElement;
    const small = formInside.querySelector("small");
    small.textContent = "";

    input.parentElement.classList.remove("error");
    input.parentElement.classList.add("success");
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}