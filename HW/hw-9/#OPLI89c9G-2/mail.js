// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const words= ['Main','Product','About us','Contacts'];

for (const word of words){
    // console.log(word);
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML=word;
    ul.append(li)
    document.body.appendChild(ul)
};
