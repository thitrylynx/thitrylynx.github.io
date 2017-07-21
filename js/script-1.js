var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".btn-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var overlay = document.querySelector(".modal-overlay");
var mlink = document.querySelector(".map-content");
var mlink2 = document.querySelector(".map-content-link");
var map = document.querySelector(".modal-content-map");
var mclose = map.querySelector(".map-close");
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("content-show");
    login.focus();
    overlay.classList.add("overlay-show");
});
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("content-show");
    overlay.classList.remove("overlay-show");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("content-show")) {
            popup.classList.remove("content-show");
            overlay.classList.remove("overlay-show");
        }
    }
});
overlay.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    popup.classList.remove("content-show");
});
mlink.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.add("map-show");
    overlay.classList.add("overlay-show");
});
mclose.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.remove("map-show");
    overlay.classList.remove("overlay-show");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (map.classList.contains("map-show")) {
            map.classList.remove("map-show");
            overlay.classList.remove("overlay-show");
        }
    }
});
overlay.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.remove("overlay-show");
    map.classList.remove("map-show");
});