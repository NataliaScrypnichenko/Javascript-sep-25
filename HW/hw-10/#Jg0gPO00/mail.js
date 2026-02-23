// створити конвертор ваги з кг в фунти.
//     дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


const input = document.getElementById('in');
const p = document.getElementById('p');

input.oninput=function (){

    const kilo = +input.value;
    // console.log(kilo);
    let result = kilo * 2.2;
    // console.log(result);

    p.innerText = result;

};
