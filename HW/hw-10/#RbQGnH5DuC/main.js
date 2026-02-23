///В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт

//   сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd) {
// це ключ LocalStorage і дістаємо його
        localStorage.setItem(arrayName);
    //робимо перевірку чи існує там масив якщо ні то видаємо помилку
    if (!localStorage.getItem(arrayName)) {
        throw new Error('there is no array')
    }
    //перетворюємо в масив
    const arrayParse = JSON.parse(localStorage.getItem(arrayName));
//робимо перевірку чи це об'єкт а потім +
     if ( typeof objToAdde === "object" ) {
         arrayParse.push(objToAdd);
     }
//знову arrayParse перетворюємо JSON
    const jsoArrayParse = JSON.stringify(arrayParse);
     //записуємо в localStorage
    localStorage.setItem(arrayName, jsoArrayParse);

}
