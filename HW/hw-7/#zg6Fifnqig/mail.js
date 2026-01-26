//#zg6Fifnqig
//– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Princess{
    constructor(name,age,sizeShoes){
        this.name=name;
        this.age=age;
        this.sizeShoes=sizeShoes;
    };
};

const princesses = [
    new Princess('Vika',22,36),
    new Princess('Yana',21,36),
    new Princess('Dasha',34,39),
    new Princess('Masha',18,35),
    new Princess('Sasha',22,37),
    new Princess('Nata',25,38),
    new Princess('OLga',35,40),
    new Princess('Ira',20,36),
    new Princess('Dusya',23,37),
    new Princess('Oksana',21,38)
];

console.log(princesses);

class Prince{
    constructor(name,age,findShoes){
        this.name=name;
        this.age=age;
        this.findShoes=findShoes;
    }

};
let price=new Prince('Roma',26,35)
console.log(price);


    for (const princess of princesses){
        if (princess.sizeShoes === price.findShoes){
               price.wife= princess;
        }
    }
console.log(price);

  const findPrincess= princesses.find(princess =>princess.sizeShoes === price.findShoes)
console.log(findPrincess);
