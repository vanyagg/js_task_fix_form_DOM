'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');
  const inputNameCapitalized = inputName[0].toUpperCase()
  + inputName.slice(1);
  const inputId = input.getAttribute('id');

  label.classList.add('field-label');
  label.setAttribute('for', inputId);
  input.setAttribute('placeholder', inputNameCapitalized);
  label.textContent = inputNameCapitalized;
  input.insertAdjacentElement("beforebegin", label);
}
