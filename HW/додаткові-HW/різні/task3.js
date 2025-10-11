// // 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
numbers1=[13,44,57,87,33,44,55,789,684,32,51,75,89,76,89,99,123,78,457,-98]

for(let i=0; i<numbers1.length; i+=3){
    let number=numbers1[i]
     if(number % 2 === 0){
         console.log(`${number}`)// 32
     }
};
