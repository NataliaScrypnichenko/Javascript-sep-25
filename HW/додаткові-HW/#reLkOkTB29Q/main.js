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

