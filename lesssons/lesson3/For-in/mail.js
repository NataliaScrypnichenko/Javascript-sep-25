//  let use ={
//     id:1,
//      name:"John Doe",
//      status: false,
//      skills:[]
//  };
// // назва палям або ключу(fielName)
// // for in-> перебирає об'єкти
//  for (let fieldName in use) {
//      // console.log(fieldName)//получемо назву поля ключ -id
//      // console.log(use[fieldName]);// получаємо значення- John Doe
//      // console.log(use['id']);
//      console.log(fieldName,use[ fieldName ]);//
//  }


// перебрати масив юзерів і також перебрати кожне поле об'єкта
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
// то тут використовуємо цикл в циклі for of(), for in

for (let user of users)// перебираю кожного об'єкта
{
   // console.log(user);
   for (let fieldName in user) // перебираю поля об'єкта
   {
       console.log(fieldName, user[fieldName]);
   }
   console.log(' ');
}

