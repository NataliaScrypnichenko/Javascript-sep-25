//#bq1zkx7WP
//*** (подібне було вище, але…будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн,
// але !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

//
let price= localStorage.getItem('price');

// минулий час візиту
let lastVisit= localStorage.getItem('lastVisit');

//перевіряємо якщо ціни ще немає — ставимо 100,якщо это збыльшуэмо
if (price ===null){
    price= 100
}else {
    price= + price
}
//створю поточний час
let now= new Date().getTime();

// різниця між візитами 1с= 10000мілісекунд
if (lastVisit !== null){
    let differentTime = now - lastVisit;
    if(differentTime > 10000){
        price +=10
    }
}

// додаю ключ і значеення і зберігаю
localStorage.setItem('price', price);
localStorage.setItem('lastVisit', now);

// записую в дів на сторінку
document.getElementById('price').innerText = price + " грн";
