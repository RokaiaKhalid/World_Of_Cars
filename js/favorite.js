let productsDom = document.querySelector("#favorite .container table tbody");
let noProducts = document.querySelector('.no-products');

function drawFavoriteProductsUI(allProducts = []) {

  if (JSON.parse(localStorage.getItem('productsFavorite')).length === 0) {
    noProducts.innerHTML = "Your Favorite is empty";
  }
  let products = JSON.parse(localStorage.getItem('productsFavorite')) || allProducts;
  let productsUI = products.map( (item) => {
    return `
    <tr>
      <td>
        <img decoding="async" src="${item.imageUrl}" alt="" />
        <a onclick="saveItemData(${item.id})">${item.title}</a>
      </td>
      <td>${item.price} EGB</td>
      <td>1</td>
      <td>
        <button onclick="addedToCart(${item.id})">Add To Cart</button>
      </td>
      <td>
        <button onclick="removeItemFromFavorite(${item.id})">Remove</button>
      </td>
    </tr>
    `
  });
  productsDom.innerHTML = productsUI.join("");
}

drawFavoriteProductsUI();

// Remove From Favorite
function removeItemFromFavorite (id) {
  let productsFavorite = localStorage.getItem('productsFavorite');
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);

    let filterItems = items.filter((item) => item.id !== id);
    localStorage.setItem('productsFavorite', JSON.stringify(filterItems));
    drawFavoriteProductsUI(filterItems);
  }
}

function saveItemData(id) {
  localStorage.setItem('productId', id);
  window.location = "cartDetails.html";
}