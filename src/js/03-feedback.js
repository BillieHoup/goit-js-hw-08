import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const messageArea = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button[type="submit"]');

function restoreFormData() {
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  const formData = {
    email: emailValue,
    message: messageValue,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

emailInput.addEventListener('input', throttle(restoreFormData, 500));
messageInput.addEventListener('input', restoreFormData);

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  emailInput.value = parsedData.email;
  messageInput.value = parsedData.message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});
