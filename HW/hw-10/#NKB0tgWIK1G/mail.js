
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//         При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

// // створюємо масив з 100 об'єктів
let users = [];

for (let i = 1; i <= 100; i++) {
    users.push({
        id: i,
        name: "User" + i
    });
}

// console.log(users);
const block = document.getElementById("block");
const buttonPerv = document.getElementById("prev");
const buttonNext = document.getElementById("next");

// 2. Змінні для пагінації і тут використовуємо ф-ю render()
let startPage = 1;
let diapasonPage = 10;
function render() {

    block.innerHTML = "";//чистить

    const start = (startPage - 1) * diapasonPage;
    const end = start + diapasonPage;
    // використовуємо .slice(start, end)- яка ріже масив
    const pageItemUsers = users.slice(start, end);

    for (let item of pageItemUsers) {
        const div = document.createElement('div');
        div.innerText = `${item.id} - ${item.name}`;
         block.appendChild(div);
    }
}

// //обробка кнопок
// Next
buttonNext.onclick = function (){
    startPage++;
    render();
};

// Prev
buttonPerv.onclick = function () {
        startPage--;
        render();

};

// console.log(users.slice(10, 20))
render();




