// //4. Вивести за допомогою console.log кожен третій елемент, тільки
// // якщо цей елемент є парним, та записати їх в новий масив

numbers2=[13,44,57,87,33,44,55,789,684,32,51,75,89,76,89,99,123,78,457,-98]
numbers3=[]
for(let i=0; i<numbers2.length; i+=3){
    let number=numbers2[i]
    if(number % 2 === 0){
        numbers3[numbers3.length]=number;
        console.log(numbers3);
    }
};
