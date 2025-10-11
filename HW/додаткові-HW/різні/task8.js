// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…).
// пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let numberString=[7,467,'hello', 77,'go',44, 'book', 890,'place'];

let numbers=[];

for (let i = 0; i<numberString.length; i+=1){
    let number=numberString[i];
    if (typeof numberString[i] ==='number'){
        numbers[numbers.length]=number;
    }
};

console.log(numbers);
