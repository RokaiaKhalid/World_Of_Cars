
// code of Card
let code = document.querySelector('.code');
let codelabel = document.querySelector('.code label');
let codeInput = document.querySelector('.code input');
function cardCode() {
  code.style.flexDirection = "column";
  codelabel.style.fontSize = "14px";
  codelabel.style.color = "#aaa";
  codeInput.style.display ="block";
}

// Name of Card
let name = document.querySelector('.name');
let namelabel = document.querySelector('.name label');
let nameInput = document.querySelector('.name input');
function cardName() {
  name.style.flexDirection = "column";
  namelabel.style.fontSize = "14px";
  namelabel.style.color = "#aaa";
  nameInput.style.display ="block";
}

// Date of Card
let date = document.querySelector('.date');
let datelabel = document.querySelector('.date label');
let dateInput = document.querySelector('.date input');
function cardDate() {
  date.style.flexDirection = "column";
  datelabel.style.fontSize = "14px";
  datelabel.style.color = "#aaa";
  dateInput.style.display ="block";
}

// Password of Card
let password = document.querySelector('.password');
let passwordlabel = document.querySelector('.password label');
let passwordInput = document.querySelector('.password input');
function cardPassword() {
  password.style.flexDirection = "column";
  passwordlabel.style.fontSize = "14px";
  passwordlabel.style.color = "#aaa";
  passwordInput.style.display ="block";
}

// Add The Card
function addNew() {
  localStorage.setItem('codeCard', codeInput.value);
  localStorage.setItem('nameCard', nameInput.value);
  localStorage.setItem('dateCard', dateInput.value);
  localStorage.setItem('passwordCard', passwordInput.value);
}
