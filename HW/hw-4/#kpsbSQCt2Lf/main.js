//// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//index1= це є самий елемент
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
    let item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;

    return arr;
};

let a=swap([11,22,33,44],0,1);
console.log(a);//[22,11,33,44]
