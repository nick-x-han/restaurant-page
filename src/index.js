// src/index.js
import "./styles.css";
import homeLoad from "./home.js";
import menuLoad from "./menu.js";
import contactLoad from "./contact.js";

const tabHandler = (function () {
    const content = document.querySelector("#content");
    const homeButton = document.querySelector("#hbutton");
    const menuButton = document.querySelector("#mbutton");
    const contactButton = document.querySelector("#cbutton");
    const nav = document.querySelector("nav");

    nav.addEventListener("focusin", e => {
        if (e.target === homeButton) {
            clearContent();
            homeLoad();
        }
        else if (e.target === menuButton) {
            clearContent();
            menuLoad();
        }
        else if (e.target === contactButton) {
            clearContent();
            contactLoad();
        }
    })
    // nav.addEventListener("click", e => {
    //     if (e.target === homeButton) {
    //         clearContent();
    //         homeLoad();
    //     }
    //     else if (e.target === menuButton) {
    //         clearContent();
    //         menuLoad();
    //     }
    //     else if (e.target === contactButton) {
    //         clearContent();
    //         contactLoad();
    //     }
    // })

    function clearContent() {
        if (content.firstElementChild)
            content.removeChild(content.firstElementChild);
        else
            alert("For some reason, there wasn't content to delete");
    }

    homeLoad();

})();
