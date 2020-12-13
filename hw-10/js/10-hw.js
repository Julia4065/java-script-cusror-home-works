const letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

const keys = document.querySelector(".keys");

letters.map((letter) => {
    const key = document.createElement(`div`);
    key.className = 'key-playing';
    key.id = letter.charCodeAt();
    key.innerHTML = letter;
    keys.appendChild(key);
})

document.addEventListener('keydown', function (e) {
    document.querySelectorAll("[data-letter='" + e.key + "']")[0].play();
});