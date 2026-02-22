import { frequentlyAskedQuestions } from "./scripts/data.js";
import { insertItemToAccordionSection } from "./scripts/components.js";

// Parallax Scrolling Effect
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
    var value = this.window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    mountain.style.top = -value * 0.15 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
});

// Accordion Functionality
// Call this function for each FAQ item in your data
function showFAQ(id) {
    const item = document.getElementById(id);
    item.classList.toggle("open");
}

const lenFAQ = Object.keys(frequentlyAskedQuestions).length;
for (let i = 0; i < lenFAQ; i++) {
    insertItemToAccordionSection(frequentlyAskedQuestions[i]);
    // showFAQ(frequentlyAskedQuestions[i].id);
}

window.showFAQ = showFAQ; // Make the function globally accessible for inline event handlers