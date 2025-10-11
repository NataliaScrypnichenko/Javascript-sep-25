// 1. Створити пустий масив та :
//
//         a. заповнити його 50 парними числами за допомоги циклу.
//
//         b. заповнити його 50 непарними числами за допомоги циклу.
//
//         c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)


// //
// // a. заповнити його 50 парними числами за допомоги циклу.
let arr=[];
for (let i=0; i<50; i++){
   arr[i]=i*2;
}
console.log(arr);
// // // b. заповнити його 50 непарними числами за допомоги циклу.
let numbers1=[];
for (let i=0; i<50; i++){
    numbers1[i]=i*2+1;
}
console.log(numbers1);
//  //   c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
let arr1 = [];

for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 100); // від 0 до 99
    arr1[i] = randomNum;
}

console.log(arr1);
// // d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr2 = [];
for (let i = 0; i<20; i++) {

    let randomNumber = Math.floor(Math.random() * (732 - 8+1)) + 8;

    arr2[i] = randomNumber;
}
console.log(arr2);


