let arr;
arr = [123, 234,345, -123, 0, true, 'asdfgh'];
console.log(arr);
// витягування елемента через індекс
console.log(arr [0]);
console.log(arr[1]);
console.log(arr[4]);
// довжина масива
console.log(arr.length);//7
//перевизначення- замінити елемента
arr[0]='new value';
console.log(arr);
// останній індекс це довжина мінус 1
//додати елемент до масива
arr[7]= 'okten';
console.log(arr);//[ 'new value', 234, 345, -123, 0, true, 'asdfgh', 'okten' ]//8 -елементів,7-індекс
//+ нового елемента не рахуючи їх
arr[arr.length]=1234567;
console.log(arr); 

