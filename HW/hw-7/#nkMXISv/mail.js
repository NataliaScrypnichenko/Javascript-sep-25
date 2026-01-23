//– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients=[
    new Client(1,'Nata','Smith','vnh@gmail.com','+380678905678',['coffee','salt','bread']),
        new Client(2,'Nata','Smith','vnh@gmail.com','+380678905678',['fish','salt','bread','salad']) ,
    new Client(3,'Petay','Smith','vnh@gmail.com','+380678905678',['coffee','salt','bread','apple']),
    new Client(4,'Masha','Smith','vnh@gmail.com','+380678905678',['coffee','salt','bread']) ,
    new Client(5,'Nata','Smith','vnh@gmail.com','+380678905678',['carrots','cake','honey']),
    new Client(6,'Dana','Smith','vnh@gmail.com','+380678905678',['coffee','fish','apple']) ,
    new Client(7,'Nata','Smith','vnh@gmail.com','+380678905678',['coffee','salt','cake']),
    new Client(8,'Nata','Smith','vnh@gmail.com','+380678905678',['coffee','apple','bread']) ,
    new Client(9,'Nata','Smith','vnh@gmail.com','+380678905678',['coffee','cake','bread']),
    new Client(10,'Nata','Smith','vnh@gmail.com','+380678905678',['coffee','salt','bread','fish','bread']) ,

];
console.log(clients);
