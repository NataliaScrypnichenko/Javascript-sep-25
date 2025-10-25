//– створити функцію, яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,
// \який є числовим (тут використовувати цикл) та виводить його через document.write

function list(text,number) {
    for (let i = 1; i <= number; i++) {
        if (typeof number  === 'number') {
            document.write(`
            <ul>
                <li>${text}</li>
             </ul>
            
            `)
        };
    };
};
list('hello',10);
list('banana',30);
