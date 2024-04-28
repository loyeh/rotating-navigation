const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

console.log(main, nav, home, about, contact);

nav.addEventListener("click", () => {
    main.classList.toggle("show");
    nav.classList.toggle("show");
    home.classList.toggle("show");
    about.classList.toggle("show");
    contact.classList.toggle("show");
});
