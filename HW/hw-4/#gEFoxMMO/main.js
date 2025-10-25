//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function accept(array) {
    document.write(`<ul>`)
    for (let item of array) {
        document.write(` <li>${item}</li>`);
    }
    document.write(`</ul>`)
};


accept(['hello',9,'hello',456, 0 , true,'book','ten',false]);
