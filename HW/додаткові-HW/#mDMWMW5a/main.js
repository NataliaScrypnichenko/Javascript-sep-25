//– Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for(let i = 0; i<10; i+=1) {
    document.write(`
    <div>${i+=1}</div>
    `) ;

};
for(let i = 0; i<10; i+=1){
    console.log(i+=1);
}
