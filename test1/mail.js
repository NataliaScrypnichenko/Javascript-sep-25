
let input = document.getElementById("nameValue");
let divInfo = document.getElementById("info");
let buttonAdd = document.getElementById("buttonAdd");
let error = document.getElementById("error");


buttonAdd.onclick = function () {
    // зчитуємо інформацію, прибираємо пробіли на початку і в кінці
    let info = input.value.trim();

    // пере провіряємо ведені данні в input де Name = Value (Name літери, Value цифри)
    let matchResult = info.match(/^([\p{L}]+)\s*=\s*([0-9]+)$/u);

    // перевірка даних і додавання в divInfo
    if (matchResult) {
        // якщо правильний
        let p = document.createElement("p");

        // додаю інформацію
        p.innerText = matchResult[1] + " = " + matchResult[2] ;


        divInfo.appendChild(p);
        // очищаю повідомлення про помилку
        error.innerText = "";
    } else {
        // якщо неправильний
        error.innerText = "Неправильний формат! Використайте Name=Value, де Name літери, Value цифри.";
    }
    // очищаю поле вводу input
    input.value = "";

}

    let buttonSortName=document.getElementById("buttonSortName");
    let buttonSortValue= document.getElementById("buttonSortValue");
    let buttonDelete=document.getElementById("buttonDelete");



buttonSortName.onclick = function () {
//створюю масив для сортування
    let arr = [];
    let items = divInfo.children;

    for (let i = 0; i < items.length; i++) {
        arr.push(items[i]);
    }
   //сортую значення
    arr.sort(function(a,b){
         // створюю зміну де беру тільки значення
        let nameA=a.innerText.split('=')[0].trim();
         let nameB =b.innerText.split('=')[0].trim();

     if (nameA>nameB) {
         return 1;
      }
     if (nameA<nameB){
         return -1;
     }
     if (nameA === nameB) {
         return 0;
     }

    });
    // очищаю зразу поле
    divInfo.innerHTML = "";
    // записую назад послідовно значення
    for (let i = 0; i < arr.length; i++) {
        divInfo.appendChild(arr[i]);
    }

}


buttonSortValue.onclick = function () {
    let arr = [];
    let items = divInfo.children;

    for (let i = 0; i < items.length; i++) {
        arr.push(items[i]);
    }

    arr.sort(function(a,b){
        let valueA=a.innerText.split('=')[1].trim();
        let valueB=b.innerText.split('=')[1].trim();

        return valueB - valueA ;

    })

    divInfo.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        divInfo.appendChild(arr[i]);
    }
}
    // // створюю checkbox
//         // let checkbox = document.createElement("input");
//         // checkbox.type = "checkbox";
//         // checkbox.classList.add('checkbox');
//         // p.appendChild(checkbox);
//         //створимо div для стилізації p and checkbox
//
//         // let divStyle = document.createElement("div");
//         // divStyle.classList.add('div_style');
//         // divStyle.append(p, checkbox);
// p.appendChild(checkbox);
// p.classList.add('p_checkbox');
