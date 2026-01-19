// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

const users=[
    new User(1,'Nata','Smith','vnh@gmail.com','+380678905678'),
    new User(2,'Emma','Brown','vnh@gmail.com','+380678905678'),
    new User(3,'Nata','Johnson','vnh@gmail.com','+380678905678'),
    new User(4,'Olivia','Davis','vnh@gmail.com','+380678905678'),
    new User(5,'Daniel','Moore','vnh@gmail.com','+380678905678'),
    new User(6,'Sophia','Miller','vnh@gmail.com','+380678905678'),
    new User(7,'Rama','Wilson','vnh@gmail.com','+380678905678'),
    new User(8,'Sasha','Taylor','vnh@gmail.com','+380678905678'),
    new User(9,'Pasha','Anderson','vnh@gmail.com','+380678905678'),
    new User(10,'Anna','Thomas','vnh@gmail.com','+380678905678')
];

console.log(users);
