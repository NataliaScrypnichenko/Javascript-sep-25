//#AiN5CoUQ
//Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


//вирішила за допомоги відповіді ДЗ
function copyObject(obj) {
    if (obj === undefined) {
        return undefined;
    }
    if (obj === null) {
        return null;
    }
    if (typeof obj ==='number'&& Number.isNaN===NaN(obj)){
        return NaN;
    }
    if (obj ) {

        let functions=[];// створили масив куди будем ложити ф-ї
        for (const key in obj) {

               if (typeof obj[key] === 'function') {  //перевіряємо тип ключі об'єкта являються функцією
                   const functionCopy = obj[key].bind({});//якщо так, то робимо копію
                   functions.push({functionCopy,key});// потім додаємо об'єкт з ключем
               }
        }
        // console.log(functions);//провіряємо чи там функції
        const objectCopy= JSON.parse(JSON.stringify(obj));
        // objectCopy[functions[0].key] =functions[0].functionCopy;
        // objectCopy[functions[1].key] =functions[1].functionCopy;
        //не розуміємо скільки є там ф-ій(об'єкт) то ітеруємо
        for (const func of functions) {
           objectCopy[func.key] = func.functionCopy;
        }
        console.log(objectCopy);
        return objectCopy ;
    }
    throw new Error('!!!!!!!!')
}
const clone = copyObject({id: 1, name:'Dasha',greeting(){console.log('hello')}, work(){console.log('by')}});
clone.work();
clone.greeting();
console.log(copyObject(undefined));
console.log(copyObject(20));
console.log(copyObject(null));
