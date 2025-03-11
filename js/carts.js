let productsDom = document.querySelector("#cart .container table tbody");
let noProducts = document.querySelector('.no-products');
let total1 = document.querySelector('#total');
// if(productsInCart) {
//     let items = JSON.parse(productsInCart);
//     drawCartProductsUI(items);
// }

function drawCartProductsUI(allProducts = []) {
  let total = 0;
  if (JSON.parse(localStorage.getItem('productsInCart')).length === 0) {
    noProducts.innerHTML = "Your Cart is empty";
    total1.innerHTML = +0+".00 EGB";
  }
  let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
let productsUI = products.map( (item) => {
  total = total + +item.price * item.qty;
  total1.innerHTML = +total + ".00 EGB";
  localStorage.setItem('totalShopping', total1.innerHTML = +total + ".00 EGB");

  return `
  <tr>
    <td>
      <img decoding="async" src="${item.imageUrl}" alt="" />
      <a onclick="saveItemData(${item.id})">${item.title}</a>
    </td>
    <td>${item.price} EGB</td>
    <td>${item.qty}</td>
    <td>${item.price * item.qty} EGB</td>
    <td>
      <button onclick="removeItemFromCart(${item.id})">Remove</button>
    </td>
  </tr>
  `
});
productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI();

function removeItemFromCart (id) {
  let productsInCart = localStorage.getItem('productsInCart');
  if (productsInCart) {
    let items = JSON.parse(productsInCart);

    let filterItems = items.filter((item) => item.id !== id);
    localStorage.setItem('productsInCart', JSON.stringify(filterItems));
    drawCartProductsUI(filterItems);
  }
}

function saveItemData(id) {
  localStorage.setItem('productId', id);
  window.location = "cartDetails.html";
}
// // Total Account
// let total = document.querySelector(".total");
// let totalPrice = document.querySelector(".total span");
// let price = item.price * item.qty;
// totalPrice = price;
// // for(let i = 0; i < )