// Define Product
let cartProductMune = document.querySelector(".cart-products");
let cartProductDivDom = document.querySelector(".cart-products div");
let shoppingCartIcon = document.querySelector(".shopping-card");
let badgeDomC = document.querySelector(".shopping-card .badge");

let product = document.querySelector(".box");



let favoriteProductMune = document.querySelector(".favorite-products");
let favoriteProductDivDom = document.querySelector(".favorite-products .content");
let badgeDomF = document.querySelector(".favorite .badge");
let favoriteIcon = document.querySelector(".favorite");



let products = JSON.parse(localStorage.getItem('SuspensionAndBrakes'));

// Chack if there is items in LocalStorage
let addedItem = localStorage.getItem('productsInCart')
  ? JSON.parse(localStorage.getItem('productsInCart'))
  : [];

  if (addedItem) {
    addedItem.map((item) => {
      cartProductDivDom.innerHTML += `
      <div>
        <img src="${item.imageUrl}">
        <p>${item.title}</p>
        <span>qty:${item.qty}</span>
      </div>
      `;
    });
    badgeDomC.style.display = "flex";

    badgeDomC.innerHTML += addedItem.length;
  }


// Add To Card
function addedToCart(id) {
  let product = products.find( (item) => item.id === id);
  let isProductInCart = addedItem.some(i => i.id === product.id);
  console.log('items', isProductInCart)
  if (isProductInCart) {
    addedItem = addedItem.map(p => {
      if(p.id === product.id) p.qty += 1;
      return p;
    })
  } else {
    addedItem.push(product);
  }
  // UI
  cartProductDivDom.innerHTML = "";
  addedItem.forEach(item => {
    cartProductDivDom.innerHTML += `
    <div>
      <img src="${item.imageUrl}">
      <p>${item.title}</p>
      <span>qty:${item.qty}</span>
    </div>
    `;
  })

  // Save DAta
  localStorage.setItem('productsInCart', JSON.stringify(addedItem));

  //  Add Counter OF Items
  let cartItems = document.querySelectorAll(".cart-products .content div");
  console.log(cartItems);
  badgeDomC.style.display = "flex";
  badgeDomC.innerHTML = cartItems.length;
} 

// function getuniqueArr(arr, filterType) {
//   let unique = arr
//   .map((item) => item[filterType])
//   .map((item, i, final) => final.indexOf(item) === i && i)
//   .filter(item => arr[item])
//   .map((item) => arr[item])
  
//   return unique;
// }
// getuniqueArr();
// Open Card Mune
shoppingCartIcon.addEventListener('click', openCardMune);


function openCardMune() {

  let cartProductDivDom = document.querySelector(".cart-products .content");

  if (cartProductDivDom.innerHTML != "") {
    if ( cartProductMune.style.display == 'block') {
      cartProductMune.style.display =  'none';
    } else {
      cartProductMune.style.display =  'block';
    }
  
  }
}

// Chack Loged User
function checkLogedUserC() {
  if (localStorage.getItem('username')) {
  window.location = 'cartproducts.html';
  } else {
    window.location = 'login.html';
  }
}

function saveItemData(id) {
  localStorage.setItem('productId', id);
  window.location = "cartDetails.html";
}

// Add To Favorite
let favoritesItems = localStorage.getItem('productsFavorite')
  ? JSON.parse(localStorage.getItem('productsFavorite'))
  : [];

  if (favoritesItems) {
    favoritesItems.map((item) => {
      favoriteProductDivDom.innerHTML += `
      <div>
        <img src="${item.imageUrl}">
        <p>${item.title}</p>
      </div>
      `;
    });
    badgeDomF.style.display = "flex";

    badgeDomF.innerHTML += favoritesItems.length;
  }

// Add To Favorite
function addedToFavorite(id) {
  let productF = products.find( (item) => item.id === id);
  productF.liked = true;
  let isProductInFavorite = favoritesItems.some(i => i.id === productF.id);
  console.log('items', isProductInFavorite)
  if (isProductInFavorite) {
    favoritesItems = favoritesItems.map(p => {
      if(p.id === productF.id) p.qty = 1;
      return p;
    })
  } else {
    favoritesItems.push(productF);
  }
  // UI
  favoriteProductDivDom.innerHTML = "";
  favoritesItems.forEach(item => {
    favoriteProductDivDom.innerHTML += `
    <div>
      <img src="${item.imageUrl}">
      <p>${item.title}</p>
    </div>
    `;
  });
  // let uniqueProducts = getuniqueArr(favoritesItems, 'id');

  // Save Data
  localStorage.setItem('productsFavorite', JSON.stringify(favoritesItems));

  //  Add Counter OF Items
  let favoriteItems = document.querySelectorAll(".favorite-products .content div");
  console.log(favoriteItems);
  badgeDomF.style.display = "flex";
  badgeDomF.innerHTML = favoriteItems.length;

  products.map((item) =>{
    if (item.id === productF.id) {
      item.liked = true;
    }
  });
  // localStorage.setItem('products', JSON.stringify(products));
  drawProductsUI(products);
} 

// Open Favorite Mune
favoriteIcon.addEventListener('click', openFavoriteMune);


function openFavoriteMune() {

  let favoriteProductDivDom = document.querySelector(".favorite-products .content");

  if (favoriteProductDivDom.innerHTML != "") {
    if ( favoriteProductMune.style.display == 'block') {
      favoriteProductMune.style.display =  'none';
    } else {
      favoriteProductMune.style.display =  'block';
    }
  
  }
}

// Chack Loged User To Favorite
function checkLogedUserF() {
  if (localStorage.getItem('username')) {
  window.location = 'favorites.html';
  } else {
    window.location = 'login.html';
  }
}
// function addedToFavorite(id) {
//   let chooseItem = products.find( (item) => item.id === id);
//   chooseItem.liked = true;
//   favoritesItems = [...favoritesItems, chooseItem];
//   let uniqueProducts = getuniqueArr(favoritesItems, 'id');
//   localStorage.setItem('productsFavorite', JSON.stringify(uniqueProducts));
//   products.map((item) =>{
//     if (item.id === chooseItem.id) {
//       item.liked = true;
//     }
//   });
//   localStorage.setItem('products', JSON.stringify(products));
//   drawProductsUI(products);
// } 
