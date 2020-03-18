const formValidation = () => {
  const emailInput = document.querySelector('#email');
  const countryInput = document.querySelector('#country');
  const zipcodeInput = document.querySelector('#zipcode');
  const passInput = document.querySelector('#pass');
  const passConfInput = document.querySelector('#confirm-pass');

  emailInput.addEventListener('focusout', function() {
    console.log('emailValidate');
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity('Please use a valid email format');
      emailInput.reportValidity();
      emailInput.classList.add('invalid');
    } else {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
    }
  });

  // /// YERRRR - cant get off field if invalid

  countryInput.addEventListener('focusout', function() {
    console.log('countryValidate');
  });

  zipcodeInput.addEventListener('focusout', function() {
    console.log('zipcodeValidate');
  });

  passInput.addEventListener('focusout', function() {
    console.log('passValidate');
  });
  passConfInput.addEventListener('focusout', function() {
    console.log('passConfValidate');
  });
};

export default formValidation;
