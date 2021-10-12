//Hamburger menu shows up by clicking the icon

document.querySelector("a>.fa-bars").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").style.display = "block";
});

document.querySelector("a>.fa-times").addEventListener("click", function () {
    document.querySelector(".hamburger-menu").style.display = "none";
});