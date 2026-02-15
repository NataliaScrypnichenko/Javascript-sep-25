//  let target= document.getElementById("target");
//
// // target.onclick = function(){
// //     console.log("click");
// // };
//
//  // target.onclick = function(event){
//  //     console.log(event);
//  // };
//
//  // target.onmousemove = function(ev){
//  //     // console.log(ev);
//  //     // console.log('move');
//  //     //витягуємо информацию
//  //     console.log(ev.clientX,ev.clientY);
//  //     let r=ev.clientX;
//  //     let g = ev.clientX;
//  //     let b = ev.clientY;
//  //     this.style.background=` rgb(${r},${g},${b})`
//  // }
//
// //  target.onclick = function(){
// //      console.log('sgasajduwrdk');
// //  };
// // console.log(target)
// // //як можна додати подію щоб вона додавалася др поточного значення
// //  target.addEventListener('click', function(){
// //      console.log("asdffrewq");
// //  })
//
//  // target.onmouseover=function(){
//  //     console.log("over");//миша на обєкті
//  // }
//  // target.onmouseleave=function(){
//  //     console.log("leave");//миша за об'єктом
//  // }
// //
// // let i1=document.getElementById("i1");
//
// // i1.oninput = function(){
// //    console.log(this.value);//дістає те що пишуть
// //     target.innerText= this.value;//інформація записується в дів
// // };
// //.onsubmit()-перезавантаження сторінки(батон перезавантажує сторінку коли натискаєш її)
//
//  let f1=document.forms.f1;
//  f1.onsubmit= function(event){
//      //console.log('hello');-видно що іде пере завантаження
//      event.preventDefault();// не пере завантажується
//      console.log('hello');
//      let user= {name:this.username.value};//створили об'єкт
//      console.log(user);//{"name": "sasha"} моожна відправити її
//  }

// можемо трекати стан нашого документа чи завантажився, чи выкнр завантажилось


window.onload=function(){
    console.log('load ')//завнтажилось раузерне вікно
}
    // у вікні рендиться саме наш документ
document.onreadystatechange=function(){
  console.log(document.readyState)
}// змінює прараметр readystate- документ завантажився

document.onreadystatechange=function(){
    if (document.readyState === 'interactive') {
          document.body.innerText='Loading start....'
    }
    if (document.readyState === 'complete') {
        document.body.innerText='Loading complete...'
    }
}// змінює прараметр readystate- документ завантажився
