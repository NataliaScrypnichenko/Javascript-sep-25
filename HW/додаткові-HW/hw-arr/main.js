let usersWithId = [

          {id: 1, name: 'vasya', age: 31, status: false},

          {id: 2, name: 'petya', age: 30, status: true},

          {id: 3, name: 'kolya', age: 29, status: true},

          {id: 4, name: 'olya', age: 28, status: false}

];
let citiesWithId = [

         {user_id: 3, country: 'USA', city: 'Portland'},

         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},

         {user_id: 2, country: 'Poland', city: 'Krakow'},

         {user_id: 4, country: 'USA', city: 'Miami'}

];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];

    for (let a = 0; a < citiesWithId.length; a++) {
        let city = citiesWithId[a];
//ящо рівні то створюємо новий масив
        if (user.id === city.user_id) {

            usersWithCities[i]= {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: city
            };

        };

    };
};

console.log(usersWithCities);

// //– Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers=[32,54,67,89,35,22,11,356,88,907];

for (let i=0; i<numbers.length; i++){
    let number=numbers[i];
    if (number % 2 === 0){
        console.log(number);
    }
}

//   – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив.
//   За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbers1=[32,54,67,89,35,22,11,356,88,907];
let numbers2=[];

for (let i=0; i<numbers1.length; i++){
    let number=numbers1[i];
        numbers2[numbers2.length]=number;

};
console.log(numbers2);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let litters=['a','b','c'];
let word='';
for (let litter of litters){
    word+=litter;

};
console.log(word);
// / – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let litters1=['a','b','c'];
let word1='';

let i = 0;
while (i < litters.length){
    word1 = word1 + litters[i];
    i++;
};
console.log(word1);
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
let litters2=['a','b','c'];
let word2='';

for (let i=0; i<litters2.length; i++){
    word2 = word2 + litters2[i];
};
console.log(word2);
