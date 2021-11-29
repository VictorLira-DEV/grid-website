import './services.scss';

const picture1 = document.querySelector(".picture1");
const picture2 = document.querySelector(".picture2");
const picture3 = document.querySelector(".picture3");
const picture4 = document.querySelector(".picture4");
const popUp = document.querySelector(".pop-up");
let img = document.createElement("img");

const overlayExterna = document.querySelector(".overlay-externa");
const closeBtn = document.querySelector(".close-btn");

overlayExterna.addEventListener("click", exitPicture);
closeBtn.addEventListener("click", exitPicture);
function setBackGroundImage(src, jpeg) {
    img.setAttribute(src, jpeg);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");

    popUp.appendChild(img);
}

function removeHiddenClass() {
    overlayExterna.classList.remove("hidden");
    popUp.classList.remove("hidden");
}

function exitPicture() {
    overlayExterna.classList.add("hidden");
    popUp.classList.add("hidden");
}

picture1.addEventListener("click", function () {
    setBackGroundImage("src", "./1a98b6b897e139c9fad1.jpeg");
    removeHiddenClass();
});

picture2.addEventListener("click", function () {
    setBackGroundImage("src", "./1793231d00d343fe2477.jpg");
    removeHiddenClass();
});

picture3.addEventListener("click", function () {
    setBackGroundImage("src", "./22ec23742c253d054656.jpg");
    removeHiddenClass();
});

picture4.addEventListener("click", function () {
    setBackGroundImage("src", "./b326ee2c44d91a51e713.jpg");
    removeHiddenClass();
});
