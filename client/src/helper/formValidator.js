export default function formValidator(user) {
  const { email, password, passwordRepeat } = user;
  const errors = {};
  if (isEmpty(email)) {
    errors.email = 'Email is required!';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email you entered is invalid.';
  }

  if (isEmpty(password)) {
    errors.password = 'Password is required!';
  } else if (password.length < 6) {
    errors.password = 'Password should be atleast 6 characters';
  }

  if (user.passwordRepeat !== undefined) {
    if (isEmpty(passwordRepeat)) {
      errors.passwordRepeat = 'Password is required!';
    } else if (passwordRepeat.length < 6) {
      errors.passwordRepeat = 'Password should be atleast 6 characters';
    } else if (passwordRepeat !== password) {
      errors.passwordRepeat = 'Both Passwords should match';
      errors.password = 'Both Passwords should match';
    }
  }

  return errors;
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function isEmpty(value) {
  return value === '';
}
