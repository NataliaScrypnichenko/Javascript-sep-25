//  let r1=10+20;
// let r2=20+22;

function calc(a,b) {
    let result=a+b;
    return result;
};

let r1=calc(10,20);
console.log(r1);
let r2= calc(20,22);
console.log(r2);
let number=calc(570+340)

// cash=10000; вичислити pdv=20% warTax=1.5%

// function percentCalc(sum){
//     let pdv= sum/100*20;
//     let warTax = sum/100*1.5;
//     return sum-pdv-warTax;
// }
//
// let cashNumber=percentCalc(10000);
// console.log(cashNumber);
//але щоб це все так неписати то можна скороти тому що є дії які повторюються і тут можна створити функцію

function cashCalc(sum,percent) {
    return sum/100 * percent;
}
// let a=cashCalc(1000,20);
// console.log(a);
function percentCalc(sum){
    return sum-cashCalc(sum,20)-cashCalc(sum,1.5);
};

 let cashNumber=percentCalc(10000);
 console.log(cashNumber);//7850


// перебрати і створити новий масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function userfilter(users) {
    let filterNewUsers = [];// новий масив
    for (let user of users) {
        if (user.age <30){
           filterNewUsers.push(user); // з фильтрованих зробити масив
        }
    }
  return filterNewUsers;
};

//щоб побачити дані потрібно створити зміну
let filter=userfilter(users);
console.log(filter);
