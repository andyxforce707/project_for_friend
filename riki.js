const c = 'click';
const unv = document.body;
const loginButton = document.querySelector('#container .navbar .reg .login');
const loginSection = document.querySelector('#container .login-section');

loginButton.addEventListener(c, () => {
  loginSection.classList.toggle('active');
});
