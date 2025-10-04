//– Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

for(let i = 0; i<100; i+=2) {
    document.write(`<div>${i+=2}</div>`);
    console.log(i);

};
