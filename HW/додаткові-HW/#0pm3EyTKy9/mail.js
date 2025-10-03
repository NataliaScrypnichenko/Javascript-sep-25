//– Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arr=[];

arr[0]= 1;
arr[1]=34;
arr[2]=true;
arr[3]=2345;
arr[4]='word';
arr[5]='book';
arr[6]='cooke';
arr[7]=56;
arr[8]=-98;
arr[9]=false;
console.log(arr);
 for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
 };
