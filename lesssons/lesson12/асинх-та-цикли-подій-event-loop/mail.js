
console.log('1');

//буде виконуватися в затримці 1секунди аба 1000 млсек)-async тобто той час який вкажемо

// setTimeout(function () {
//     console.log('hi');
// },1000);
//
// setTimeout(function () {
//     console.log(' hello');
// },200);
// console.log('2');

//event loop- характеризує цикл подій


//функція колбек хелп-параміда вдум

// setTimeout(function () {
//     console.log('hi 1');
//     setTimeout(function () {
//         console.log('hi 2');
//         setTimeout(function () {
//             console.log('hi 3');
//             setTimeout(function () {
//                 console.log('hi 4');
//                 setTimeout(function () {
//                     console.log('hi 5');
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// є ще нюанс
let x =1;// синхрона операція

for (let i = 0; i <= 1000; i++) {

}// не дасть

setTimeout(function (){
    x = 1000;
}, 1000);// х=буде 1000 через секунду  і тільки вмежах setTimeout

console.log(x);//1
