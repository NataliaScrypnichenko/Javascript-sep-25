// localStorage.setItem('asd','qwe')
// // 'asd'- це ключ, 'qwe'-значення
// // можна дістати інформацію
// let item=localStorage.getItem('asd')
// console.log(item)
// //можна зберегти об'єкт сюди
// localStorage.clear();// чистимо
// localStorage.setItem('user',JSON.stringify({id:1,name:'Sasha'}))

// // змінити дані тобто додати новий
//     //дістаємо юзер
// let userJson=localStorage.getItem('user');
// console.log(userJson)//string
// //перетворюємо в об'єкт
// let user=JSON.parse(userJson)
// console.log(user);
// //вносимо зміни
// user.age=31;
// console.log(user);
// //все потрібно зберегти з роками
// let stringify=JSON.stringify(user);
// //localStorage
// localStorage.setItem('user',stringify);

//змінити коли масив
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
//ми записали все це локал сторич тепер вона не потрибна можна закоментувати

localStorage.setItem('users',JSON.stringify(users))

// let usersJSON=localStorage.getItem('users');
// console.log(usersJSON);
// //перетворюємо на звичайний об'єкт JSON
// let usersS =JSON.parse(usersJSON);
// console.log(usersS);//провіряємо
// // додаемо об'єкт
//   users.push({name:'Natasha', age: 35, status: false});
//   console.log(users);

