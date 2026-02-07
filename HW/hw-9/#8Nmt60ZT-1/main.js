//   #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.


let div= document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.innerText='om didn\'t like going to school, and he didn\'t like working.\n' +
    ' He liked playing and having adventures.\n' +
    ' One Friday, he didn\'t go to school  —  he went to the river. '
div.style.color ='red';
document.body.appendChild(div);

let copyDiv=div.cloneNode(true);
document.body.append(copyDiv);
