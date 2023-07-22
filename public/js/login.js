document.addEventListener('DOMContentLoaded', () => {
  const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    console.log(email, password);

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
      console.log('LOGGED IN');

      if (response.ok) {
        document.location.replace('/dashboard');
        console.log('response ok');
      } else {
        alert(response.statusText);
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log('SIGNED UP');
      } else {
        alert(response.statusText);
      }
    }
  };

  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');

  if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
  }

  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
  }
});