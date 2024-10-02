import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form')

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
  evt.preventDefault();

  let delayVal = Number(delay.value)
  const stepVal = Number(step.value)
  const amountVal = Number(amount.value)
  
  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayVal += stepVal
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
       const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    res({position, delay})
  } else {
    rej({position, delay})
  }
    }, delay)
  })
}