
async function foo() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

    let posts= await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())

        console.log(result)
        console.log(posts)
}

foo()
// для того щоб зпрацювала функція потрібно її визвати
//дає можливість працювати з асинхроним кодом в функції async\ await-чекаю пока ф-я отпрацює.
    // тепер можна працювати з ними через функцію
