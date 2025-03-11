
let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user_info li:first-child');
let userName = document.querySelector('#user');
let userMail = document.querySelector('#email');
let userType = document.querySelector('#account-type')
let links = document.querySelector('#links_log');
let logOutBtn = document.querySelector('#log_out');
let into = document.querySelector('.into');
let image = document.querySelector('.into img');
let intoDom = document.querySelector('.into div');
let list = document.querySelector('.list');

let username = localStorage.getItem('fName');
let eMail = localStorage.getItem('email');
let accountType = localStorage.getItem('accountType');
if (username) {
  links.remove();
  userInfo.style.display = "block";
  userName.innerHTML += username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  userMail.innerHTML = eMail;
  userType.innerHTML = accountType;
  into.innerHTML = username.charAt(0).toUpperCase();
  intoDom.style.display = "block";
  into.style.backgroundColor = "#fff";
  into.style.color ="#777";
  into.style.padding = "0px 7px";
  into.style.Weight = "bold";
  image.style.display = "none";
}

logOutBtn.addEventListener('click', home);

function home() {
  localStorage.clear();
  userInfo.remove();
  links.style.display = "block";
  image.style.display = "block";
  intoDom.remove();
  setTimeout(() => {
    window.location = "index.html";
  }, 1500);
}

function profile () {
  if ( list.style.display == 'block') {
    list.style.display =  'none';
  } else {
    list.style.display =  'block';

  }
  
}
into.addEventListener('click', profile);


