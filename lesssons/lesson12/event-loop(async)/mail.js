// console.log('log1')// синхрон
//
// setTimeout(()=>{
//  console.log('asd')
// },2000);
//
// console.log('log2')// синхрон
//
// setTimeout(()=>{
//  console.log('qwe')
// },1000);
//
// console.log('log3')// синхрон
// // будь яка асинхрона фунція не спроможна змінювати якусь зовнішню змінну
// let x =0;
//
// setTimeout(()=>{
//     х =100500
// }, 1000);
// console.log(x);

// //
//  let i=0;
//  while (i < 5) {
//      setTimeout(()=>{
//          console.log(i);
//      })
//      i++;
//  };//5 тому що

//таким способом вивидкться нормальні числа
let i=0;
while (i < 5) {
    run(i)
    i++;
};

function run (i){
    setTimeout(()=>{
        console.log(i);
    }, 1000);
}
