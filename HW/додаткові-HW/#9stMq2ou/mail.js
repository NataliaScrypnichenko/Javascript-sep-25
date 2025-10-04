// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr;

arr = [4,568,'hello',true, null,67.90,'word',false,34,0];

for (let item of arr) {
    if (typeof item === 'number') {
        console.log(item)
    }
};
