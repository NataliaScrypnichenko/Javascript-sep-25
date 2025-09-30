/// Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру за шаблоном
// //
// // Масив:
// // let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];
// // ШАБЛОН:
// //
// //  <ul>
// //
// //     <li>ITEM OF ARRAY</li>
// //
// //     <!–
// //
// //         і тд інші об’єкти масиву
// //
// /
// // </ul>
//
// // замість ‘ITEM OF ARRAY’ підставити елемент з масиву, щоб вийшов цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular',' node.js'];

      // for (let i=0; i<listOfItems.length; i++ ) {
      //     document.write(`<ul><li>${listOfItems[i]}</li></ul>`)
      // }
//а скажіть так можна було написати відповідь через  for?
document.write(`<ul>`)
  for (let item of listOfItems) {
      document.write (`<li>${item}</li>`)
  }
document.write(`</ul>`)
