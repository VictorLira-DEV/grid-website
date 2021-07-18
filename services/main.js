const picture1 = document.querySelector(".picture1");
const picture2 = document.querySelector(".picture2");
const picture3 = document.querySelector(".picture3");
const picture4 = document.querySelector(".picture4");

const overlayExterna = document.querySelector(".overlay-externa");
const closeBtn = document.querySelector(".close-btn");
const popUp = document.querySelector(".pop-up");

picture1.addEventListener("click", function () {
    setBackGroundImage("src", "./images/picture-1-original.jpeg");
    removeHiddenClass();
});

picture2.addEventListener("click", function () {
    setBackGroundImage("src", "./images/picture-2-original.jpg");
    removeHiddenClass();
});

picture3.addEventListener("click", function () {
    setBackGroundImage("src", "./images/picture-3-original.jpg");
    removeHiddenClass();
});

picture4.addEventListener("click", function () {
    setBackGroundImage("src", "./images/picture-4-original.jpg");
    removeHiddenClass();
});

overlayExterna.addEventListener("click", exitPicture);
closeBtn.addEventListener("click", exitPicture);

function removeHiddenClass() {
    overlayExterna.classList.remove("hidden");
    popUp.classList.remove("hidden");
}

function exitPicture() {
    overlayExterna.classList.add("hidden");
    popUp.classList.add("hidden");
}

let img = document.createElement("img");

function setBackGroundImage(src, jpeg) {
    img.setAttribute(src, jpeg);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");

    popUp.appendChild(img);
}
