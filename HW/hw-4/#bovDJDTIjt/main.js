//– створити функцію, яка приймає масив об’єктів з наступними полями
// id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок

let users = [
    {id:1, name: 'vasya', age: 31, status: false},
    { id:2,name: 'petya', age: 30, status: true},
    {id:3, name: 'kolya', age: 29, status: true},
    {id:4, name: 'olya', age: 28, status: false},
    { id: 5,name: 'max', age: 30, status: true},
    {id:6, name: 'anya', age: 31, status: false},
    {id:7,  name: 'oleg', age: 28, status: false},
    {id:8,  name: 'andrey', age: 29, status: true},
    {id:9,  name: 'masha', age: 30, status: true},
    {id:10,  name: 'olya', age: 31, status: false},
    { id:11, name: 'max', age: 31, status: true}
];

function make(array) {
    for (let item of array) {
        document.write(`
                         <div>${item.id} ${item.name} ${item.age} </div>
                      `)
    };
    return item;
};

let user = make(users);
