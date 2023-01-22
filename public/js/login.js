const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("we are here");
   
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
  console.log(email)
  console.log(password)

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          email: email.value,
          password: password.value
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response)
      if (response.ok) {

        document.location.replace('/listing/new');

      } else {
        alert(response.statusText);
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  console.log("we are here");
   
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log(email)
  console.log(password)

    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({  email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response)
      if (response.ok) {

        document.location.replace('/listing/new');
 
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login-btn')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('#signup')
    .addEventListener('click', signupFormHandler);
  