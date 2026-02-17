// знаходимо  діи продуктс
let productsDiv = document.getElementsByClassName("products")[0];

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.tea4you.com.ua/image/cache/catalog/%D0%92%D1%81%D0%B5%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E/4823096806693-1000x1000.jpg'
    },
];
for (const product of products) {

    // // створюємо дів
     let productBlock = document.createElement('div');//h2-img

    let img = document.createElement('img');
    img.src=product.image;

    let h2 = document.createElement('h2');
    h2.innerText = ` ${product.title} - ${product.price} UAH`;

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'add at cart';

  buttonElement.onclick = function () {
      // console.log(localStorage.getItem('cart'));

       let cart = JSON.parse(localStorage.getItem('cart')) || [];
       cart.push(product);
       localStorage.setItem('cart', JSON.stringify(cart));
   }
     productBlock.append(h2, img, buttonElement);
    productsDiv.appendChild(productBlock);
}
















