// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.

 let checkNumbers=[100,250,50,168,120,345,188];
 let sum=0;

for (let i = 0; i < checkNumbers.length; i++) {
    sum =sum + checkNumbers[i];
};

let averageNumber=sum / checkNumbers.length;
 console.log(averageNumber);
