// Register User
let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let conPassword = document.querySelector("#con_password");
let number = document.querySelector("#number")
let accountTypeBtn = document.querySelectorAll("input[name='account-type']");
let acceptBtn = document.querySelector("input[name='accept']");
let registerBtn = document.querySelector("#sign_up");


function register(e) { 
  e.preventDefault();
  if (fName.value === "" || lName.value === "" || email.value === "" || password.value === "" || conPassword.value === "") {
    alert("Fill Data");
  } else if (password.value !== conPassword.value) {
      alert("Rewrite Password, Please.");
  } else {

    localStorage.setItem('fName', fName.value);
    localStorage.setItem('lName', lName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirmPassword', conPassword.value);
    localStorage.setItem('number', number.value);

    let findSelected = () => {
      let selected = document.querySelector("input[name='account-type']:checked").value;
      localStorage.setItem('accountType', selected);
    }
    accountTypeBtn.forEach(accountTypeBtn => {
      accountTypeBtn.addEventListener('change', findSelected)
    });
    findSelected();
    setTimeout(() => {
      window.location = 'login.html';
    }, 1500);
  }

}
registerBtn.addEventListener('click', register);

