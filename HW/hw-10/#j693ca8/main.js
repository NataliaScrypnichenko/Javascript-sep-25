// #j693ca8
// <input  id="ageinput" >
// <button  id="check"></button>
//<div id="message"></div>
// – створити інпут, який приймає вік людини,
// та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
// чи менше він за 18, та повідомити про це користувача


let input = document.getElementById('ageInput');

let button = document.getElementById('check');
button.innerText='checking age';

 let message=document.getElementById('message');

button.onclick  = function() {
    //з читую яку інформацию вели
    let age=input.value;
    // перетворюємо в число
    age = Number(age);
    //перевірка данних
    if (isNaN(age)) {
        message.innerText = 'веди число';
    }
    if (age >18) {
        message.innerText = 'надано доступ';
    }
    if (age < 18) {
        message.innerText = 'ще не має 18 років((';
    };

};
