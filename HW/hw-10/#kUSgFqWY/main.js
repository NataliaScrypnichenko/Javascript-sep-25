//     //#kUSgFqWY
// // Створити 3 інпута та кнопку.
//     // Один визначає кількість рядків,
//     // другий – кількість ячеєк,
//     // третій – вміст ячеєк.
//     // При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом


const tableForm= document.forms['tableForm'];

const row=document.getElementById("row");
const cell=document.getElementById("cell");
const text=document.getElementById("tExt");
//
// let button=document.getElementById("bt");
 const table=document.getElementById("l1");


tableForm.onsubmit= function (event) {
    //чистимо дані щоб таблиця нв таблицю не шла
    table.innerText='';
    //щоб сторінка не перезавантажувалась
    event.preventDefault();
//зчитуємо інформацію форми інпутів
    const rowsValue= +tableForm.rows.value;
    const cellsValue= +tableForm.cells.value;
    const textValue= tableForm.text.value;
    console.log(rowsValue, cellsValue, textValue);

    //будуємо структуру,коли не має певної кількость як будувати то використовуємо цикл
    //будуємо рядок
   for (let i=1; i< rowsValue; i++) {

       const tr = document.createElement('tr');
       //будуємо ячейку
       for (let j=0; j< cellsValue; j++) {
           const tc=document.createElement('tc');
           tc.textContent= '' + textValue;
           tr.appendChild(tc);
       }
       table.appendChild(tr);
   };

};
