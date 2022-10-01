
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
}
function  onClick() {
  body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
    changeBackgroundColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute("disabled");
    console.log("set interval");
};

btnStart.addEventListener("click", onClick);

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStop.setAttribute('disabled', true) ;
    btnStart.removeAttribute("disabled");
console.log("remove interval")
})