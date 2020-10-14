class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
  }

  _fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();

//Класс для корзины
class Cart {
  constructor() {}

  getCartData() {} //предполагаю, что данные корзины где-то хранятся и нужно уметь их оттуда достать 
  setCartData() {} //предполагаю, что данные корзины где-то хранятся и нужно уметь их туда сохранять
  addToCart() {}   //добавление нового товара в корзину
  removeFromCart() {} //удаление товара из корзины
  clearCart() {}    //очистить корзину
  getCartSum() {}   //вычислить стоимость товаров в корзине
  getCartDiscount() {} //вычислить сумму скидки для товаров в корзине

}
//нужно что-то изменить
//Класс для элемента корзины
class CartItem {
  constructor(product, quantity, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
    this.quantity = quantity;
  }

  getSum() {}
  getDiscount() {}
}

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
