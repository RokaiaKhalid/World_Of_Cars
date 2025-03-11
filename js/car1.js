let SuspensionAndBrakesDom = document.querySelector("#Suspension_and_Brakes .container")
let SuspensionAndBrakes = SuspensionAndBrakesDB;

let enginePartsDom = document.querySelector("#engine_parts .container");
let engineParts = enginePartsDB;

let mirrorsDom = document.querySelector("#mirrors .container");
let mirrors = mirrorsDB;

(drawProductsUI =function drawProductsUI() {
  let productsUI = SuspensionAndBrakes.map( (item) => {
    return `
      <div class="box">
        <div class="image">
          <img decoding="async" src="${item.imageUrl}" alt="" />
          <div class="favorite">
            <i class="fa-regular fa-star ${item.liked == true ?
              'fa-solid' : 'fa-regular'}" onclick="addedToFavorite(${item.id})"></i>
          </div>
        </div>
        <div class="content">
          <a onclick="saveItemData(${item.id})">${item.title}</a>
          <p>${item.price} EGB </p>
        </div>
        <div class="info">
          <button onclick="addedToCart(${item.id})">
          <i class="fa-solid fa-cart-shopping"></i>
          ADD TO CART</button>
        </div>
      </div>
    `
  });
  SuspensionAndBrakesDom.innerHTML = productsUI;
})(JSON.parse(localStorage.getItem('SuspensionAndBrakes')) || SuspensionAndBrakes);

// engine_parts
(drawEnginesUI =function drawEnginesUI() {
  let productsUI = engineParts.map( (item) => {
    return `
      <div class="box">
        <div class="image">
          <img decoding="async" src="${item.imageUrl}" alt="" />
          <div class="favorite">
            <i class="fa-regular fa-star ${item.liked ==true?
            'fa-solid' : ''}" onclick="addedToFavorite(${item.id})"></i>
          </div>
        </div>
        <div class="content">
          <a onclick="saveItemData(${item.id})">${item.title}</a>
          <p>${item.price} EGB </p>
        </div>
        <div class="info">
          <button onclick="addedToCart(${item.id})">
          <i class="fa-solid fa-cart-shopping"></i>
          ADD TO CART</button>
        </div>
      </div>
    `
  });
  enginePartsDom.innerHTML = productsUI;
})(JSON.parse(localStorage.getItem('engineParts')) || engineParts);

// Mirrors
(drawMirrorsUI =function drawMirrorsUI() {
  let productsUI = mirrors.map( (item) => {
    return `
      <div class="box">
        <div class="image">
          <img decoding="async" src="${item.imageUrl}" alt="" />
          <div class="favorite">
            <i class="fa-regular fa-star ${item.liked ==true?
            'fa-solid' : ''}" onclick="addedToFavorite(${item.id})"></i>
          </div>
        </div>
        <div class="content">
          <a onclick="saveItemData(${item.id})">${item.title}</a>
          <p>${item.price} EGB </p>
        </div>
        <div class="info">
          <button onclick="addedToCart(${item.id})">
          <i class="fa-solid fa-cart-shopping"></i>
          ADD TO CART</button>
        </div>
      </div>
    `
  });
  mirrorsDom.innerHTML = productsUI;
})(JSON.parse(localStorage.getItem('mirrors')) || mirrors);