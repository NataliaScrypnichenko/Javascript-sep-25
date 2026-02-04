//DOM
// console.log(document);
// console.log(document.head);
// //дізнатися все що в хедері
// console.log(document.head.children);
// //що в боді
// console.log(document.body);
// console.log(document.body.children);

// як робити пошук елементів

// id
// let ul=document.getElementById("list-1");
// console.log(ul);
// let ul1=document.body.getElementById("list-1")//пошука тут по айді не має

//по класу пошук
//
// let menuCollection=document.getElementsByClassName("menu");
// console.log(menuCollection);
// for (const menueCollElement of menuCollection ) {
//     console.log(menueCollElement);
// }


//по тегу
//
// let ulList=document.getElementsByTagName('ul');
// console.log(ulList);
//
// let liList=document.getElementsByTagName('li');
// //знайти лі яка нажежить до першого класу
// let list1=document.getElementById('list-1');
// console.log(list1);
// let listCollection=list1.getElementsByTagName('li');
// console.log(listCollection);

// не швидкий але він кращий з точку зору синтаксичної конструкції

// знаходить тільки один елемент по певному CSS
// document.querySelector()
console.log(document.querySelector('ul'))
//знаходить всі входження
console.log(document.querySelectorAll('ul'));
//знайти лі в дрогому меню
console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
console.log(document.querySelectorAll('#list-2 > li'));
//можна дістати кожний елемент
for (const node of nodeListOf){
    console.log(node);
}// дає помилку.
