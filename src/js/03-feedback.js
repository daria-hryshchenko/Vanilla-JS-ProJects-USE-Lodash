import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');


const {
  elements: {
    email: emailEl,
    message: textAreaEl
  }
} = contactFormEl;

populateTextArea();

contactFormEl.addEventListener('submit', onFormSubmit);
contactFormEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  console.log({
    email: emailEl.value,
    message: textAreaEl.value
  })
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {

  const formData = {
    email: emailEl.value,
    message: textAreaEl.value
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    let dataObject = JSON.parse(savedMessage);
    emailEl.value = dataObject.email;
    textAreaEl.value = dataObject.message;
  }
}