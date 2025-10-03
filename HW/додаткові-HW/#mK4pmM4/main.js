// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

let arr=[3,7,'ffjghjkfg', 'dfg ', 'hello', true,70,'kklk',78,56];

for (let item of arr) {
   if (typeof item === 'string') {
       console.log(item);
   }
};
