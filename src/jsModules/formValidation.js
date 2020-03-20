/* -will validate all document inputs with a class of 'validate'
-specific check for confirm pass class 'confirm-pass-check'
-specific check for country text input class 'validate-country' with datalist
id 'dl1' */
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
    if (passInput.value === input.value) {
      return false;
    }
    return 'Ensure password fields are identical';
  };

  const whatError = input => {
    const { validity } = input; // object destructing
    if (validity.valid) return null;
    if (validity.valueMissing) return 'This field is required to submit';
    if (validity.typeMismatch) {
      if (input.type === 'email') return 'Please enter a valid email address';
      if (input.type === 'url') return 'Please enter a valid URL';
    }
    if (validity.patternMismatch) {
      if (input.hasAttribute('title')) return input.getAttribute('title');
      return 'Please use the correct format';
    }
    if (validity.tooLong)
      return `Please enter a maximum of ${input.getAttribute(
        'maxlength'
      )} characters. (Currently ${input.value.length})`;

    if (validity.tooShort)
      return `Please enter a minimum of ${input.getAttribute(
        'minlength'
      )} characters. (Currently ${input.value.length})`;
    if (validity.rangeUnderflow)
      return `Please select a minimum value of ${input.getAttribute('min')}`;
    if (validity.rangeOverflow)
      return `Please select a maximum value of ${input.getAttribute('max')}`;
    if (validity.stepMismatch) return 'Please select a valid value';
    if (validity.badInput) return 'Please enter a number';
    return 'Invalid entry for this field';
  };

  const showError = (errorMessage, input) => {
    let errorID = `error-${input.id}`;
    let errorDiv = input.form.querySelector(`#error-${input.id}`);
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.id = errorID;
      errorDiv.classList.add('error-message');
      errorDiv.innerText = errorMessage;
      input.form.insertBefore(errorDiv, input.nextSibling);
      input.classList.add('error');
    }
  };

  const removeError = input => {
    let errorDiv = input.form.querySelector(`#error-${input.id}`);
    if (errorDiv) {
      console.log(errorDiv);
      errorDiv.parentNode.removeChild(errorDiv);
      input.classList.remove('error');
    }
  };

  document.addEventListener('focusout', function(event) {
    if (event.target.classList.contains('validate-country')) {
      const errorMessage = countryCheck(event.target);
      if (errorMessage) {
        removeError(event.target);
        showError(errorMessage, event.target);
      } else {
        removeError(event.target);
      }
    }
    if (event.target.classList.contains('validate-confirm-pass')) {
      const errorMessage = passMatch(event.target);
      if (errorMessage) {
        removeError(event.target);
        showError(errorMessage, event.target);
      } else {
        removeError(event.target);
      }
    }
    if (event.target.classList.contains('validate')) {
      const errorMessage = whatError(event.target);
      if (errorMessage) {
        removeError(event.target);
        showError(errorMessage, event.target);
      } else {
        removeError(event.target);
      }
    }
  });

  document.addEventListener('submit', function(event) {
    if (!event.target.classList.contains('validate')) return;
    event.preventDefault();
    let formChilds = Array.from(event.target.children);
    let inputs = formChilds.filter(item => {
      return item.tagName.toLowerCase() === 'input';
    });
    let errorPresentCheck = false;
    inputs.forEach(input => {
      if (whatError(input)) {
        console.log('error present');
        input.focus();
        errorPresentCheck = true;
      }
    });
    if (!errorPresentCheck) {
      console.log('High Five');
      alert('form high five');
    }
  });
};

export default formValidation;
