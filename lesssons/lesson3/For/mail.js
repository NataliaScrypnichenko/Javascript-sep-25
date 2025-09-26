let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// i->це скорочено від назви індекс let i=0;(номер індекса юзера з якого будемо провіряти)[0]
//  i < users.length(межі цикла) i++(кроки тобто якою шириною він іде )
// якщо ми ідемо до передостанього елемента то повині відняти -1

// for (let i=0; i < users.length; i++) {
//     console.log(users[i]);
// }

//document.write(`<h3>user info - ${users[i].name}</h3>`)
// for (let i=0; i < users.length; i++) {
//    document.write(`<h3>${users[i].name} ${users[i].age} - ${users[i].status}</h3>`);// vasya 31 - false
// }
//
// for (let i=0; i < users.length; i++) {
//     let user = users[i];// це робимо щоб красиво виглядав код users[i]- даємо назву.
//     document.write(`<h3>${user.name} ${user.age} - ${user.status}</h3>`);// vasya 31 - false
//
// }


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
        image: 'https://images.ctfassets.net/e8bhhtr91vp3/1EqX0UthBM9K736CLCpF14/b5cf71deb1a4c6388b0d4f9edf2441e1/Medium-794522731121.01.webp?w=800&q=70'
    },
]; // DB

for (let i=0; i<products.length; i++) {
    let product = products[i];
    console.log(product);
    document.write(`<div class="target">
                   <h3>${product.title} - ${product.price} UAH</h3>
                   <img src="${product.image}" alt="">
    </div>`)
}
