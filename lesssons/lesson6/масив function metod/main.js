let arr=[];

console.log(typeof arr);//
console.log(typeof {});//
console.log(Array.isArray(arr));//true-чи масив-провіряє

arr.push('drink1')//-+в кінець
arr.push('drink2')
arr.push('drink3')
arr.push('drink4')
arr.push('drink5')
console.log(arr);

arr.pop()//видаляє з кінця
console.log(arr);

arr.unshift('=====')// + на початок масива
console.log( arr);

arr.shift('====');//(- з початку)
console.log( arr);

let join=arr.join(' $ ');//поєднує між собою
console.log(join);

let nums =[11,22,33,44];
let concat=arr.concat(nums);//поєднує два масива і можна вказувати хто перший
console.log(concat);//["drink1","drink2","drink3","drink4",11,22,33,44]

nums.reverse();//- перевертає
console.log(nums);//[44,33,22,11]


console.log(concat);//
console.log(concat.slice(0,4));//нарізіє з індекса по який

// concat.splice(0,3, 'book','eat','do','meet');//вирізає і додає нове на те місце
// console.log(concat);//["book","eat","do","meet","drink4",11,22,33,44]

//
console.log(concat.indexOf('11'));//

console.log(nums.includes('11'));// показує чи є там це число
