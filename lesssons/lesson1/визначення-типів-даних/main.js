let n =100;
let s='asd';
let b = true;
// все це повертає типу стрінгу(тобто написано стрігою)
 console.log(typeof n);
console.log(typeof s);
console.log(typeof b);

// let arr =[11,22,22,33,44];
// let  user={
//     name:'vasya',
//     age: 31
// }
// console.log( typeof user);
// console.log(typeof arr);
//
// function asd () {
//
// }
// console.log(typeof asd);

let x =undefined
console.log(x);//undefined-це коли зміна нічому не дорівнює і задекларована
console.log(typeof undefined);//undefined
console.log( typeof null);// нічому не дорівнює-//object
console.log(typeof NaN); // це число з плавуючою кнопкою яке недорівнює жодному числу навіть собі...може випасти то означатиме щощось пішло нетак

// кастувати до буоевого типу
console.log(!!100);//true
console.log(!!-100);
console.log(!!'asd');
//те що являє собою нічого приводить до false
console.log(!!0);// false
console.log(!! undefined);
console.log(!!null);
 console.log(!!'false');

console.log(!!' ');//true-бо там пробіл а це аскакод
 console.log(!!'0');// true-> string
