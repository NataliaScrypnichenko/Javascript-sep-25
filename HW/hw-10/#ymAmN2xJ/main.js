const formName = document.forms.formName;

const p = document.getElementById("p");

formName.addEventListener("submit" ,(event)=> {
    event.preventDefault();
    //з читаю інформацію
    let nameInput =formName. name.value;
    let surnameInput = formName.surname.value;
    let ageInput = formName.age.value;
    // створюю об'єкт
    let obj = {nameInput,surnameInput,ageInput};
    console.log(obj);
    p.innerText= obj.nameInput +' '+  obj.surnameInput + ' '+ obj.ageInput;

});

