document.write('<ul>');
let listNumberString=(array)=>{
    for (let item of array){
           document.write(`<li> ${item} </li>`)
    }
}
document.write('</ul>');

console.log(listNumberString([4,5,77,88,'pen','word']));
