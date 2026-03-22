//– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.


let cartsDiv = document.getElementById('cartsDiv');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
         let {carts} = cartsObject;
        console.log(carts);
        for (const cart of carts) {

            let div = document.createElement('div');
            div.classList.add('item-cart');

            const divInfoCarts = document.createElement('div');
            div.classList.add('item-info');
            divInfoCarts.innerText =`
                  id:${cart.id}
                  total: ${cart.total},
                  discountedTotal: ${cart.discountedTotal},
                  userId:${cart.userId},
                  totalProducts:${cart.totalProducts},
                   totalQuantity: ${cart.totalQuantity},
            `;


            const ol = document.createElement('ol');
               for (const product of cart.products) {
                  const li = document.createElement('li');
                  li.innerText=`
                    id: ${product.id},
                    title: ${product.title},
                    price: ${product.price},
                    quantity: ${product.quantity},
                    total: ${product.total},
                    discountPercentage: ${product.discountPercentage},
                     discountedTotal:${product.discountedTotal},
                  `
                   const img = document.createElement('img');
                     img.src = product.thumbnail;

                   li.appendChild(img);
                   ol.appendChild(li);

                };

            cartsDiv.appendChild(div);
            div.append(divInfoCarts,ol);

             };

    });
