//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

 let sessionsList;

//робимо перевірку
if (localStorage.getItem('sessionsList')){//якщо вже є цей масив і в ньому є дані то запишеться
  sessionsList=JSON.parse(localStorage.getItem('sessionsList'));
}else {//якщо немає масива то створиться і буде потім додаватися до нього
    sessionsList=[]
};
//додаємо дату і час
sessionsList.push(new Date());
//  і потім додаємо це в localStorage
localStorage.setItem('sessionsList',JSON.stringify(sessionsList));
