//Ф.конструктор- будує об'єкти, але в ній не використовується return

 // function User(name,age,status) {
 //    this.name = name;
 //    this.age = age;
 //    this.status = status;
 // }

 let user1 = new User('Nata',42, true);
console.log(user1);
// new- нова ячейка в пам'яти конструктора

// якщо в об'єкті є ще об'єкт

// function User(name,age,status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// };

let user2 = new User('Nata',42, true,'Anna',34)
console.log(user2);
let user3 = new User('Nata',42, true,{name: 'Anna'});
console.log(user2);
//
// function User(name,age,status,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name:wifeName, age:wifeAge};
// };
//також можна створювати функцію
function User(name,age,status,wifeName,wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name:wifeName, age:wifeAge};
    this.greting=function (){
        console.log(`Hello${wifeName}!`);
    }
};
