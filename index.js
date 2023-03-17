const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const branchInput = document.getElementById('branch');
const yearSelect = document.getElementById('year');
const mock1Input = document.getElementById('mock1');
const mock2Input = document.getElementById('mock2');

nameInput.addEventListener('input', () => {
  if (nameInput.validity.valid) {
    nameInput.classList.remove('invalid');
  } else {
    nameInput.classList.add('invalid');
  }
});

branchInput.addEventListener('input', () => {
  if (branchInput.validity.valid) {
    branchInput.classList.remove('invalid');
  } else {
    branchInput.classList.add('invalid');
  }
});

yearSelect.addEventListener('change', () => {
  if (yearSelect.value !== '') {
    yearSelect.classList.remove('invalid');
  } else {
    yearSelect.classList.add('invalid');
  }
});

mock1Input.addEventListener('input', () => {
  if (mock1Input.validity.valid) {
    mock1Input.classList.remove('invalid');
  } else {
    mock1Input.classList.add('invalid');
  }
});

mock2Input.addEventListener('input', () => {
  if (mock2Input.validity.valid) {
    mock2Input.classList.remove('invalid');
  } else {
    mock2Input.classList.add('invalid');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (form.checkValidity()) {
    // Form is valid, submit it
    console.log('Submitting form...');
    form.submit();
  } else {
    // Form is invalid, show error messages
    nameInput.reportValidity();
    branchInput.reportValidity();
    yearSelect.reportValidity();
    mock1Input.reportValidity();
    mock2Input.reportValidity();
  }
});
