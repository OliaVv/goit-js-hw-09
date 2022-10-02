import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('input');
const timer = document.querySelector(".timer");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");
//const today = Date.now();
let intervalId = null;
const notifyOptions = {
    position: 'center-center',
    backOverlay: true,
    clickToClose: true,
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notify.failure("Оберіть дату в майбутньому :-)", notifyOptions);
        } else {
            btnStart.removeAttribute('disabled');
       }
    // console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options); 

btnStart.addEventListener('click', timerStart);

function timerStart() {
    Notify.success("Стартуємо :-)", notifyOptions);
    btnStart.setAttribute("disabled", true);
    intervalId = setInterval(() => {const deadline = new Date(input.value);
    const delta = deadline - Date.now();
    // console.log(deadline);
    // console.log(delta);
        if (delta < 1000) {
            clearInterval(intervalId);
Notify.success("Час вийшов...)", notifyOptions);
        } else {
            showTime(convertMs(delta))
        }
    }, 1000)
    
}

function convertMs(delta) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadinZero(Math.floor(delta / day));
  // Remaining hours
  const hours = addLeadinZero(Math.floor((delta % day) / hour));
  // Remaining minutes
  const minutes = addLeadinZero(Math.floor(((delta % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadinZero(Math.floor((((delta % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addLeadinZero(value) {
  return String(value).padStart(2, '0');
}
function showTime({ days, hours, minutes, seconds }) {

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}
timer.style.display = 'flex';
timer.style.justifyContent = 'space-evenly';
timer.style.marginTop = '40px';
timer.style.fontSize = '30px';