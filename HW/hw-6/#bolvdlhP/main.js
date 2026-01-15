//#bolvdlhP
//описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати
// з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

 const suits=[
     {name:'diamond', color:'red'},
     {name:'heart', color:'red'},
     {name:'spand', color:'black'},
     {name:'clubs', color:'black'}
 ];

const values =['6', '7', '8','9', '10','ace','jack','queen','king'];

const deckOfCards =[];

for (let suit of suits ) {
    for (let value of values) {
        deckOfCards.push({
            cardSuit:suit.name,
            value: value,
            color: suit.color,
        });
    }
}

console.log(deckOfCards);
//  – знайти піковий туз
//‘spade’, ‘diamond’,’heart’, ‘clubs’-пика, бубна, черва, трефы
//  – всі шістки
console.log(deckOfCards.filter(value => value.value === '6'));
//  – всі червоні карти
console.log(deckOfCards.filter(value => value.color === 'red'));
//  – всі буби
console.log(deckOfCards.filter(value => value.cardSuit === 'diamond'));
//  – всі трефи від 9 та більше
console.log(deckOfCards.filter(value => value.cardSuit === 'clubs' && value.value > '9'));


