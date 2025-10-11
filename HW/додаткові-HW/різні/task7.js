// 7. Створити масив з рандомними значеннями, помножити всі
// його елементи на 5 та перемістити їх в інший масив.

let numbersRam=[];
let arrNew=[];

for (let i = 0; i < 10; i++) {
    let number=numbersRam[i];
    let randomNumber=Math.floor(Math.random()*10)*5;
     numbersRam[i]= randomNumber;

};

console.log(numbersRam);

for(let i = 0; i<10; i+=1){
    let number=numbersRam[i];
    arrNew[arrNew.length]=number;

};
console.log(arrNew);
