let sessionsList=JSON.parse(localStorage.getItem('sessionsList'))
//щоб дістати localStorage дані потрібно про ітерувати масив
for (const session of sessionsList) {
    let div = document.createElement('div');

    let p = document.createElement('p');
    p.innerHTML = session.toString();

    div.appendChild(p);
    document.body.appendChild(div);
};
