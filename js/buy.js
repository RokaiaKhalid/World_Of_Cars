// Add Total shoppping
function totalShopping() {
  document.getElementById('total-shopping').innerHTML = localStorage.getItem('totalShopping');
  Number(document.getElementById('total-shopping'));
}
totalShopping();
let addCard = document.querySelector('.add');

// Add New Card
function addNewCard()  {
  window.location = "pay.html";
}
let card = document.querySelector('.card');
let cardDom = document.querySelector('.card p');
let firstSubCode = localStorage.getItem('codeCard').slice(0, 4);
let lastSubCode = localStorage.getItem('codeCard').slice(15);
function codeCard() {
  if(localStorage.getItem('codeCard')) {
    cardDom.innerHTML = `${firstSubCode}********${lastSubCode}`;
  }
  if(cardDom.innerHTML != "") {
    card.style.display = 'flex';
  } 
}
codeCard()
function cardRemove() {
  cardDom.innerHTML = "";
  card.style.display = 'none'
  localStorage.removeItem('codeCard');
}
function buy() {
  localStorage.removeItem('productsInCart');
  window.location = "index.html";
  // localStorage.removeItem('totalShopping');
}