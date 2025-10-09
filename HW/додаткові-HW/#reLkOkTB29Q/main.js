// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор

let books=[
    {
        title:'JavaScript',
        pageCount: 400,
        genres:'comedy',
        authors:['Taras','Jana'],
    },
    {
        title:"The Picture of Dorian Gray",
        pageCount: 450,
        genres:['science','comedy'],
        authors:'Oscar Wilde',
    },
    {
        title:'Pride and Prejudice',
        pageCount: 340,
        genres:['science','comedy'],
        authors:['Oscar Wilde','Charlotte Brontë','Jane Austen'],
    },
    {
        title:'Java',
        pageCount: 200,
        genres:'comedy',
        authors:'Jane Austen',
    },
    {
        title:'David Copperfield,',
        pageCount: 120,
        genres:['drama','tragicomedy','comedy'],
        authors:['Charles Dickens','Aldous Huxley']
    },
    {
        title:'Brave New World',
        pageCount: 230,
        genres:['drama','tragicomedy'],
        authors:'Aldous Huxley',
    },
];

// – знайти найбільшу книжку.
let bigBook = 0;
for (let book of books) {
    if (bigBook === 0 || book.pageCount > bigBook.pageCount) {
        bigBook = book;
    }
};
 console.log('найбільша книга:', bigBook);

// – знайти книжку/ки з найбільшою кількістю жанрів
let bigBookWithGenre=0;
for (let i = 0; i < books.length; i++) {
    let countGenre;
    if (typeof books[i].genres === 'object'){ //genres є масивом (бо масив — це об’єкт у JS)
         countGenre= books[i].genres.length;
    }else{
        countGenre = 1;//якщо це не масив, тоді вважаю, що там один жанр
    }
    if (bigBookWithGenre < countGenre){
        bigBookWithGenre = countGenre;

    }

};
console.log('Найбільша кількість жанрів:',bigBookWithGenre);
// – знайти книжку/ки з найдовшою назвою
// let maxTitleLength = 0;
// for (let i = 0; i < books.length; i++) {
//     if (!maxTitleLength) {
//         maxTitleLength = books[i];
//     }
//     if(books[i].genres.length > maxTitleLength.genres.length){
//         maxTitleLength = books[i].genres.length;
//     }
// }
// console.log(maxTitleLength);
let maxTitleLength = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitleLength) {
        maxTitleLength = books[i].title.length;
    }
    if (books[i].title.length === maxTitleLength) {
        console.log('Книжки з найдовшою назвою:')
        console.log('-', books[i].title);
    }
};

// // Книжки, які писали 2 автори
for (let i = 0; i < books.length; i++) {
    let count = 0;
    if (typeof books[i].authors === 'object') {
        count = books[i].authors.length;
    } else {
        count = 1;
    }
    if (count === 2) {
       console.log('Книжки, які писали 2 автори:' ,books[i].authors);
    }
};
//- Книжки, які писав 1 автор

for (let i = 0; i < books.length; i++) {
    let count = 0;
    if (typeof books[i].authors === 'object') {
        count = books[i].authors.length;
    } else {
        count = 1;
    }
    if (count === 1) {
        console.log('Книжки, які писав 1 автор:', books[i].title);
    }
};

