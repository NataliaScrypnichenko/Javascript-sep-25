let user={
    id:1,
    name:"John",
};
//додати поле якщо до нього немає доступу
user.age=31;
user['status']= false;// цей варіант більше динамічний
console.log(user);//{ id: 1, name: 'John', age: 31, status: false }

//видалити певну х-ку
delete user['id'];
// delete user.id;
console.log(user); //{ name: 'John', age: 31, status: false }

 
