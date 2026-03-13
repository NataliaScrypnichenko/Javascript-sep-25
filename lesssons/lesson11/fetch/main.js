//щоб отримати інформацію ми заходимо на сайт (https://jsonplaceholder.typicode.com/)
// Guide->Getting a resource і копіюєм fetch повертає об'єкт проміс

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())// (response) назва довільна і сюд приходить відповідь від сервера,
//                                                   // і з відповіді витягує об'єкт json() і перетворює на js об'єкти
//     // .then((json) => console.log(json));// і сюди передає читстий масив, вивівся масив і тільки
//     //                                    // тут можна робити все що завгодно з цими даними,то му що їх видно тільки в цьому місці
//    .then((users) => { //самій потім прописати дом структуру вивисти дані на сайт крей елемент
//        for (const {name,username, email} of users) {
//           document.write(`<div>
//               ${name}  ${username}
//
//
//            </div>`);
//        }
//    })


// /щоб отримати інформацію ми заходимо на сайт (https://dummyjson.com/docs)
fetch('https://dummyjson.com/products?limit=10')
    .then(value => value.json())
    // .then(({products}) => {// дістаємо сам масив якщо є ліміт
    //     for (const product of products) {
    //         document.write(` <div>  </div>`);
    //     } })
    .then(res => {
        console.log(res)
        let {products} = res;
        document.write(`<div`)
        for (const product of products) {
            document.write(`<div`)
            document.write(`<p> ${product.id}____ ${product.brand} -  ${product.price}</p>`)
            document.write(`<img src='${product.thumbnail}' alt='' >`)
            document.write(`</div`)

        }
        document.write(`</div`)
    })

//коли є 100 і є ліміт то є структура Limit and skip products то пишем url після назви ?limit=3
// хочемо пропустити перших 10 а взяти 11,12,13 то  ?limit=3&skip=10
// можна все це робити не руками а поставити  кнопку і до нього івент яки заміняє цей сигмент ?limit=3&skip=10
// тобто зробити пагінацію
// щоб ходити по сторінкам буде пізніше

// хочемо додати Add a new product
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },// заголовки до нашого інпоінта
  body: JSON.stringify({   // об'єкт який хочу зберегти
    title: 'BMW Pencil',
  })
})// прописано що додається
.then(res => res.json())  // отримуємо відповідь від того що записали
.then(console.log);


//хочемо змінити дані але є де міняється вся назва або додоється тільки одне значення = все це потрібно читати в арі
//Update a product
/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'iPhone Galaxy +1'
    })
})
    .then(res => res.json())
    .then(console.log);


// хочемо видалити
//Delete a product
// fetch('https://dummyjson.com/products/1', {
//     method: 'DELETE',
// })
//     .then(res => res.json())
//     .then(console.log);
