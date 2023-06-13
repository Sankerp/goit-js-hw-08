import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

function saveObjectToLocalStore() {
  const object = {};
  for (const element of form.elements) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      object[element.name] = element.value;
    }
  }
  localStorage.setItem(storageKey, JSON.stringify(object));
}

function restoreLocalStore() {
  const object = JSON.parse(localStorage.getItem(storageKey));
  if (object) {
    for (const element of form.elements) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = object[element.name] || '';
      }
    }
  }
}

function removeObjectLocalStore() {
  localStorage.removeItem(storageKey);
}
const throttleSaveObjectToLocalStore = throttle(saveObjectToLocalStore, 500);

function handlerSubmit(event) {
  event.preventDefault();
  const object = {};
  for (const element of form.elements) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      object[element.name] = element.value || '';
    }
  }
  console.log(object);
  removeObjectLocalStore();
  form.reset();
}
form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', throttleSaveObjectToLocalStore);
restoreLocalStore();
