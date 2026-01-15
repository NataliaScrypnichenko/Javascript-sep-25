//#EP5I1UUzAX
//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

const suits=[
    {name:'diamond', color:'red'},
    {name:'heart', color:'red'},
    {name:'spad', color:'black'},
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

console.log(deckOfCards.reduce((previousValue, card,) => {
    if (card.cardSuit === 'diamond' ){
        previousValue.diamonds.push(card);
    }else if (card.cardSuit === 'heart' ){
        previousValue.hearts.push(card);
    }else if (card.cardSuit === 'spad' ){
        previousValue.spades.push(card);
    }else if (card.cardSuit === 'clubs' ){
        previousValue.clubs.push(card);
    }

    return previousValue;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}));
