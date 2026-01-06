//– Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let message='hello world';
let lorem='lorem ipsum';
let js = 'javascript is cool';
console.log(message.toUpperCase());//
console.log(lorem.toUpperCase());//11
console.log(js.toUpperCase());//18

const string =[message,lorem,js];
for (const element of string) {
    console.log(element.toUpperCase());
}
