import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let delay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  let amount = parseInt(amountInput.value);

  if (amount > 0) {
    let timer = null;
    setTimeout(() => {
      let position = 1;
      createPromise(position, delay);
      timer = setInterval(() => {
        delay += step;
        position++;
        if (position > amount) {
          clearInterval(timer);
        } else {
          createPromise(position, delay);
        }
      }, step);
    }, delay);
  }
});
