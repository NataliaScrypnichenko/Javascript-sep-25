// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {
   if (exchangeCurrency === 'USD') {
       return sumUAH/currencyValues;
   }else if (exchangeCurrency === 'EUR') {
       return sumUAH/currencyValues;
   }
}

let usd = exchange(10000,25,'USD');
console.log(usd);//400

let eur = exchange(10000,45,'EUR');
console.log(eur);//222,22


