// number=>string
console.log(typeof (100500));
console.log(typeof (100500+ ''));
console.log(typeof (100+300+ ''));
console.log(typeof ('' + 100 + 300));
// string=>number
console.log(typeof (+'100500'))
console.log(parseInt('100500asd'))
console.log(parseInt('100500.123'))// округлить
console.log(parseFloat('100500.123'))// 100500.123
// number, string =>boolean
console.log(!!100);//true
console.log(!!0);//false тільки 0 є false тому, що це нічого
console.log(!!'asd');//true
console.log(!! '');// false
console.log(!!'0');//true
// boolean=> number, string
console.log(true + '');// string
console.log(+ true); //1
console.log(+ false); //0
console.log(100 + true);//101
console.log(100 - true);//99
