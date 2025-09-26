//цикл- це синтексичні конструктори,вони дозволяють виконати щось н кількість
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
//потрібно перебрати кожний об'єкт і вивести ім'я
   for (let user of users){
       console.log(user.name);// тут вона видасть всі імена
   }
/// вивести статус тру
debugger; 
   for (let user of users){
       if(user.status) {
           console.log(user);
       }
       // } else if( user.age>=31) {
       //     console.log(user);
       // }
   };

