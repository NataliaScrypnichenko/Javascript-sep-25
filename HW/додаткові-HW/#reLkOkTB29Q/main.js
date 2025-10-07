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
let maxGenres=0;
for (let i = 0; i < books.length; i++) {
    let genreCount;
    // кількість жанрів
    if (typeof books[i].genres === 'object') { //— означає, що genres є масивом (бо масив — це об’єкт у JS)
        genreCount=books[i].genres.length;
    }else{
        genreCount = 1 //якщо це не масив, тоді вважаю, що там один жанр
    };
    // найбільшою кількістю жанрів
    if (genreCount > maxGenres) {
        maxGenres = genreCount;
    }

};
console.log('Найбільша кількість жанрів:', maxGenres);

// // - Книжка/ки з найдовшою назвою
let maxTitleLength = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitleLength) {
        maxTitleLength = books[i].title.length;
    }
};
console.log('Книжки з найдовшою назвою:')
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length === maxTitleLength) {
        console.log('-', books[i].title);
    }
};

// Книжки, які писали 2 автори
console.log('\nКнижки, які писали 2 автори:');
for (let i = 0; i < books.length; i++) {
    let count = 0;
    if (typeof books[i].authors === 'object') {
        count = books[i].authors.length;
    } else {
        count = 1;
    }
    if (count === 2) {
        console.log('-', books[i].title);
    }
};

//- Книжки, які писав 1 автор
console.log('\nКнижки, які писав 1 автор:');
for (let i = 0; i < books.length; i++) {
    let count = 0;
    if (typeof books[i].authors === 'object') {
        count = books[i].authors.length;
    } else {
        count = 1;
    }
    if (count === 1) {
        console.log('-', books[i].title);
    }
};
