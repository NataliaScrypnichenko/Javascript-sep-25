
//створити ячейку в localStorage
let numbers = +localStorage.getItem('number');
//збільшую число
numbers += 1;
//додаю ключ і значеення
localStorage.setItem('number', numbers);
// записую в дів на сторінку
document.getElementById('div').innerText = numbers;
