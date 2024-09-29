const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')

start.addEventListener('click', onStart)
stop.addEventListener('click', onStop)

let changeColor = null;

function onStart(evt) {
    changeColor = setInterval(() => {
        evt.target.parentNode.style.backgroundColor = getRandomHexColor();
    }, 1000)
    start.disabled = true;
    stop.disabled = false;

}

function onStop() {
    clearInterval(changeColor);
    start.disabled = false;
    stop.disabled = true;
}

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


