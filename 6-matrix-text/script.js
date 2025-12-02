const para = document.querySelector("p");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const originalText = para.innerText;

let intervalId = null;
let iteration = 0;

function randomNumber() {
    const newText = originalText
        .split("")
        .map((char, index) => {
            if (index < iteration) {
                return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

    para.innerText = newText;

    iteration++;

    if (iteration > originalText.length) {
        clearInterval(intervalId);
    }
}

para.addEventListener("mouseenter", () => {
    iteration = 0; // reset every hover
    clearInterval(intervalId); // clear old interval
    intervalId = setInterval(randomNumber, 30);
});
