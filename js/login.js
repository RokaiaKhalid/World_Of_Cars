let username = document.querySelector('#username');
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");


let getUser = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName');
let getPassword = localStorage.getItem('password');
localStorage.setItem('username', getUser);
loginBtn.addEventListener('click', logIn);

function logIn(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please Fill Data");
  } else {
    if (
      getUser &&
      getUser === username.value.trim() &&
      getPassword &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = 'index.html';
      }, 1500);
    } else {
      console.log('Username Or Password is Wrong');
    }
  }
}