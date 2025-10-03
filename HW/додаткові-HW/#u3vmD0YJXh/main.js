// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let arr;
arr = [4,568,'hello',true, null,67.90,'word',false,NaN,0]
for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    // console.log(arrElement);
    if (typeof arrElement === 'boolean') {
        console.log(arrElement)
    }
};
