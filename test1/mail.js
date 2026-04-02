// <input id="nameValue" name="ifoNameValue" placeholder="Name=Value"/>
// <button id="buttonAdd">Add</button>
// <p id="error" className="error"></p>
// <div id="buttonInfo" className="buttonInfo">


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
        // створюю checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');
        //створимо div для стилізації p and checkbox

        let divStyle = document.createElement("div");
        divStyle.classList.add('div_style');
        divStyle.append(p, checkbox);

        // додаю інформацію
        p.innerText = matchResult[1] + " = " + matchResult[2] + " ";
        // p.appendChild(checkbox);

        divInfo.appendChild(divStyle);
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

    buttonSortName.onclick = function (ev) {
         let arr=[];
         let items=divInfo.children
         arr.push(items[i]);


    }
