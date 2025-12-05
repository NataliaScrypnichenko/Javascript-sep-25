document.write(`<ul>`)
let list=(text, count)=>{

     for( let i=0; i < count; i++){
         document.write(`<li>${text} </li>`)

    }

};
document.write(`</ul>`)
console.log(list ('Anna',8));
