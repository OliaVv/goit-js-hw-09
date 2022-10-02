import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const form = document.querySelector("form");
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");
const notifyOptions = {
    position: 'center-center',
    backOverlay: true,
    clickToClose: true,
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
let delay = Number(delayEl.value); 
const step = Number(stepEl.value);
  const amount = Number(amountEl.value);
  console.log(delay);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, notifyOptions)})
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, notifyOptions)})
      delay += step;
  } 
  event.currentTarget.reset();
  }
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay});
      }
    }, delay);
   }); 
};


