// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arrN=[ 1, 2, 3, 5, 7, 9, 56, 8, 67];

let i=0;
while(i<arrN.length-1){// length-1 тому, що в останньому немає сусіда
    let arrElement = arrN[i];
    if (arrN[i+1] % 2 === 0){
        arrElement=arrN[i];
        console.log(arrElement)// 1,9,56
    }
    i++;
};
