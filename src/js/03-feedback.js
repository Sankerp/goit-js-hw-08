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
  console.log(object);
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
      element.value = object[element.name] || '';
    }
  }
  // localStorage.clear();
  removeObjectLocalStore();
  form.reset();
}
form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', throttleSaveObjectToLocalStore);
restoreLocalStore();

//     const {
//     elements: { email, message },
//   } = event.currentTarget;

//   const UserData = {
//     // userEmail: email.value,
//     // userMessage: message.value,
//   };

// for (element of elements) {
//   if (elemet.tagName === 'INPUT' || element.tegName === 'TEXTAREA') {
//     elements[element.name] = element.value;
//     console.log(elements);
//   }
// }
