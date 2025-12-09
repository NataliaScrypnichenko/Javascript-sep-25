//#mkGDenYnNjn
//– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let exchange=(sumUAH,currencyValues,exchangeCurrency)=>sumUAH/currencyValues

// {
//     if (exchangeCurrency==='USD'){
//         return sumUAH/currencyValues
//     }else if(exchangeCurrency==='EUR'){
//         return sumUAH/currencyValues
//     }
// };

console.log(exchange(10000,40,'USD'));
