    // JavaScript code for form validation

    // Retrieve the input field value
const inputField = document.getElementById('inputField');

    // Event listerer added to submit button, prevents form from submitting by default
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

    // Validates the input value using a regular expression for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  const inputValue = inputField.value;

    // Checks if the input value matches the pattern
  if (!alphanumericRegex.test(inputValue)) {
    // Display an error message if the input value is not alphanumeric
    displayErrorMessage('Input value must be alphanumeric');
  } else {
    // Display a confirmation message if the input is valid and 'submits' the form
    displayConfirmation('Form submitted successfully');
    this.submit(); // 'Submit' the form
  }
});

    // Function displays the error message
function displayErrorMessage(message) {
  const errorElement = document.createElement('p');
  errorElement.style.color = 'red';
  errorElement.textContent = message;
  inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
}

    // Function displays the confirmation message
function displayConfirmation(message) {
  const confirmationElement = document.createElement('p');
  confirmationElement.style.color = 'green';
  confirmationElement.textContent = message;
  inputField.parentNode.insertBefore(confirmationElement, inputField.nextSibling);
}
/*function displayConfirmation(message) {
  console.log(message);
  // ...
}*/
