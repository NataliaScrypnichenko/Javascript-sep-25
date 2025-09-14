// let a='asd';
//
// let b="\'asd\'";   // коли прописали одинарні лапки, а потім двійні то можна їх єкранувати
//
// console.log(a, b);
//
//  let c = `zxcvbjj`  // шоблона строка чи рядок
// console.log(c);
//перевага в конкретинації-це з'єднання стрінгн в стрінгових значення в одну єдину стрінгу або в речення.

let greeting= 'hello';
let intro = ' my name is vasya'
let msg = greeting +' '+ intro;// +' '+ додаємо пробіл// приймається браузером легше
console.log(msg);
// інтрополяція
let msg2= `${greeting} ${intro}`;
console.log(msg2);
