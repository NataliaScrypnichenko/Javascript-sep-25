//   // Використовуючи данні з масиву, за допомоги document.write та циклу
//     // побудувати структуру по шаблону
//     // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//     // ШАБЛОН
//     // <div class="product-card">
//     //     <h3 class="product-title">TITLE. Price - PRICE</h3>
//     //     <img src="IMAGE" alt="" class="product-image">
//     // </div>
//     // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

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
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0O6g6gCwHTFZ66jqh8gf3aorHUU5ATA86LA&s'
        },
    ];

for (let product of products) {
    document.write(` 
    <div class="product-card">
                          <h3 class="product-title">${product.title} - ${product.price} UAH</h3>
                          <img src="${product.image}" alt="" class="product-image">
    </div>
    `)
}
