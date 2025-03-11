let productss = JSON.parse(localStorage.getItem('SuspensionAndBrakes'));
let productId = localStorage.getItem('productId')
let itemDom = document.querySelector('.item-details');
let productDetails = productss.find((item) => item.id == productId);

itemDom.innerHTML = `
  <img src="${productDetails.imageUrl}" alt="" srcset="">
  <div>
    <h2>${productDetails.title}</h2>
    <span><span>Price:</span> ${productDetails.price} EGP</span><br>
    <span><span>Quantity:</span> ${productDetails.qty}</span>

  </div>
  <div>
    <button class="buy" onclick="buyNow()">Buy Now</button>
    <button class="add-cart" onclick="addedToCart()">Add To Cart</button>
    <i class="fa-regular fa-heart"></i>
  </div>
  <button onclick="specialOrder()">Special Order</button>
`;
function buyNow() {
  window.location = "buy.html";
}
function specialOrder() {
  document.getElementById('order').classList.toggle('show');
}
function order() {
  document.getElementById("order").classList.toggle("show");
  // document.getElementById("mune").classList.toggle("show");

}
// Select Type Car
let cars = ['Nissan', 'Toyota', 'Mercedes']
let nissan = ['JUKE (2010-)', 'PATROL VI (2010-)', 'PICK UP(1985-2008)', 'TIIDA I (2004-2013)', 'QASHQAI II (2013-)', 'X-TRAIL (2007-2014)'];
let toyota = ['FORTUNER AN50-AN60 (2012-2015)', 'HILUX Pichup (2004-2010)', 'LAND CRUISER J100 (1998-2012)', 'RUSH (2019-)', 'YARIS (2014-2019)'];
let mercedes = ['C-Class W202 (1992-2000)','C-Class W204 (2007-2014)', 'E-Class W124 (1993-2003)', ' E-Class W211 (2003-2009)', 'S-Class W220 (1998-2005)', 'S-Class W221 (2005-2013)'];

let brand = document.getElementById('brand');
let model = document.getElementById('model');

cars.forEach(function addCar(item) {
  let option = document.createElement('option');
  option.text = item;
  option.value = item;
  brand.appendChild(option);

});

brand.onchange = function () {
  model.innerHTML = "<option>Select Model</option>";
  if(this.value == 'Nissan') {
    `<option value="">Select Model</option>`
    addToModel(nissan);
  } 
  if (this.value == 'Toyota') {
    `<option value="">Select Model</option>`
    addToModel(toyota);
  }
  if (this.value == 'Mercedes') {
    `<option value="">Select Model</option>`
    addToModel(mercedes);
  }
}

function addToModel(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option")
    option.text = item;
    option.value = item;
    model.appendChild(option);
  })
}