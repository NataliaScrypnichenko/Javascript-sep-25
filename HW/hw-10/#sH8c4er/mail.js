// – Створити довільний елемент з id = text
// та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

 let div= document.getElementById('text');

 let button= document.getElementsByTagName('button')[0];
 button.innerHTML='deleter';

 button.onclick = function(){
     div.remove();
 }

