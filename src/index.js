import { HomePage, MenuPage } from "./home";
import { AboutPage } from "./about";


HomePage();

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
    content.textContent = "";
    if (e.target.id === "home") {
        HomePage();
    } else if (e.target.id === "menu") {
        MenuPage();
    }
    else {
        AboutPage();
    }
});