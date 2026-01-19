 function User(name,age){
    this.name=name;
    this.age=age;
 }
 ///використовуэмо коли не можемо доступитися до User
 //prototype- умовно дає можливість прописати функцію,
 // це дає можливість до нових не потрібно додавати greeting()
 User.prototype.greeting=function(){
    return `hi my name is ${this.name}`;//(this- це звернення до майбутнього об'єкту)
 };
let user =new User('vasya', 34);
// console.log(user.greeting());//hello my name is vasya

 //apply- ф-я яка дозволяє підмінити контекст this
 let user1 =new User('Dasya', 34)
 user.greeting=function(){
     return `Hello my name is ${this.name}`
 };
 let user2 =new User('Anna', 24);

 let asd=user.greeting.apply(user2);
 console.log(asd);//Hello my name is Anna
 // user.greeting=function(msg){
 //     return `${msg} my name is ${this.name}`
 // };
 console.log(user.greeting.apply(user2, ['hi']));

 //Call це заміна apply,він приймає багато аргументів і через кому

 console.log(user.greeting.call(user2, 'hi', 'and'));

 //  bind- копіює функцію ш викликати її від іншого об'єкта
 let user3 =new User('Sasha', 34);
 user.greeting=function(){
     return `Hello my name is ${this.name}`
 };
 let greetingCopy=user.greeting.bind(user3,'[привіт]')
 console.log(greetingCopy);//
console.log(greetingCopy());
