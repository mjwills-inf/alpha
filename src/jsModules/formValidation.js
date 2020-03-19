const formValidation = () => {
  const form = document.querySelector('form');
  form.setAttribute('novalidate', true);

  const countryCheck = input => {
    const dataListOptions = document.querySelector('#dl1').options;
    const optionsArray = Array.from(dataListOptions);
    if (optionsArray.some(option => option.value === input.value)) {
      return false;
    }
    return 'Please select a valid Country';
  };

  const passMatch = input => {
    const passInput = document.querySelector('#pass');
    console.log(passInput.value);
    console.log(input.value);
    if (passInput.value === input.value) {
      return false;
    }
    return 'Ensure Password fields are Identical';
  };

  const whatError = input => {
    let validity = input.validity;
    console.log(validity);
  };

  const showError = (errorMessage, input) => {
    console.log(errorMessage);
    console.log(input);
  };

  document.addEventListener('focusout', function(event) {
    if (event.target.classList.contains('validate-country')) {
      let errorMessage = countryCheck(event.target);
      if (errorMessage) {
        showError(errorMessage, event.target);
      }
    }
    if (event.target.classList.contains('validate-confirm-pass')) {
      let errorMessage = passMatch(event.target);
      if (errorMessage) {
        showError(errorMessage, event.target);
      }
    }
    if (!event.target.classList.contains('validate')) {
      return;
    }

    let errorMessage = whatError(event.target);
    showError(errorMessage, event.target);
  });
};

export default formValidation;
