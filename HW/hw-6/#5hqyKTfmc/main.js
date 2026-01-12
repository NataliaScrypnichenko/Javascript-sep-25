//– створити функцію sortNums(array,direction), яка приймає масив чисел, та
// сортує його від більшого до меншого,
// /////або навпаки  – залежно від значення аргументу////// direction./////
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums = [11,21,3];

function sortNums(array,direction){
     if (direction ==='ascending'){
         array.sort((a,b)=> {
             return a - b;
         })
     };
     if (direction==='descending'){
         array.sort((a,b)=> {
             return b - a;
         })
     };
    return array;
};
 let sortNumsAscending=sortNums(nums, 'ascending')
console.log(sortNumsAscending);

 let sortNumsDescending=sortNums(nums, 'descending');
 console.log(sortNumsDescending);

 function sortNums2(arrayOfNums,direction){
     const sort = arrayOfNums.sort((a,b)=> a-b);
     if (direction==='ascending'){
         return sort;
     }
     if (direction==='descending'){
        return sort.reverse();
     }
 };// це краще
console.log(sortNums2(nums, 'ascending'));
console.log(sortNums2(nums, 'descending'));
