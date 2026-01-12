//– є масив
//
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Frontend', monthDuration: 4}
];
// //  — відсортувати його за спаданням за monthDuration
//  let sort=coursesAndDurationArray.sort((item1,item2)=> {
//     return  item2.monthDuration - item1.monthDuration
//  });
// console.log(sort);
//
//
// //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
// let filterArray=coursesAndDurationArray.filter(value =>value.monthDuration > 5 );
//
// console.log(filterArray);
// //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let mapArray=coursesAndDurationArray.map((value,index) =>{
//   return {id:index+1,title:value.monthDuration,monthDuration:value.monthDuration};
// });
// console.log(mapArray);


const map= coursesAndDurationArray
   .sort((a,b)=>a-b)
   .filter(value=>value.monthDuration > 5)
   .map((value, index) =>{
       value.id=index+1;
       return value;
   } );

console.log(map);
