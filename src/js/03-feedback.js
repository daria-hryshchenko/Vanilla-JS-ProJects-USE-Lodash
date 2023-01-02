import {
  throttle
} from 'lodash';

const contactFormEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_INFO = 'feedback-form-state';
const userInfo = {};


contactFormEl.addEventListener(
  'input',
  throttle(event => {
    const {
      target
    } = event;

    const fieldValue = target.value;
    const fieldName = target.name;

    userInfo[fieldName] = fieldValue;
    localStorage.setItem(LOCAL_STORAGE_INFO, JSON.stringify(userInfo));
  }, 500)
);

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();
  console.log(userInfo);
  contactFormEl.reset();
  localStorage.removeItem(LOCAL_STORAGE_INFO);
});



const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Remove item error: ', error.message);
  }
};