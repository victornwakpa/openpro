const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

document.documentElement.style.setProperty('--animate-duration', '1.5s');
document.documentElement.style.setProperty('--animate-delay', '1.5s');