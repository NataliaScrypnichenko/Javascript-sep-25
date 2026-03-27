//дивимося на АРІ якщо юзер і пости на різних серверахякі потрібно збирати окремо і потрібно об'єднати конкретного юзера
// з масивом  його постів

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => value.json())
// .then(users=>{
//
//     for (const user of users){
//         //+user.id= додаємо на основі ітеруючого юзера
//       fetch('https://jsonplaceholder.typicode.com/posts?userId'+user.id)
//           //отримати значення і витягнути якесь тіло
//           .then(value => value.json())
//         //після цього будемо мтаи всю необхідну інформацію
//         .then(postsOfIteratedUser=>{
//             // тобто взяли кожного юзера і додали йому пости
//             user.posts=postsOfIteratedUser;
//         });
//       console.log(user);
//     }
// })
//якщо в кожного поста є фото,коментарі своє то це буде колбек хел   АЛЕ

//all()- дозволяє в якості масива передати асинхроні запити або асинхронні дії
let users=fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
let posts=fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
//передаємо в масив майбутні запити то all= виконає запит [users і паралельно виконає posts і потім поверне результат
// але в середині результата вони не завязані тобто отримали два окремих масива

Promise.all([users,posts]).then(results =>{
    // console.log(results);
    // let usersArray=results[0];
    // let postsArray=results[1];
    // console.log(usersArray);
    // console.log(postsArray);
    let [users,posts]= results;
    // console.log(posts);
    // console.log(users);
    for (const user of users){
        user.posts=[];
        for (const post of posts) {
             if (user.id===post.userId){
                user.posts.push(post);
             }
        }
    }
    console.log(users);// далі можна розібрати на частини
})

// //race()-Передає масиви з запитами,отримуємо відповідь і з першу будуть пости аж потім юзерів =це пергони
// // тобто потрапить у відповідь запити який виконається перший
// Promise.race([users,posts]).then(value => console.log(value))
//
// //any()=зробить тус аму дію і then спрацює тоді коли прийде хочаб одна відповідь але тут не гарантує послідовності
// // тобто це отримати перші дані якісь дані то іє? заміна рейсу
//
// Promise.any([posts,posts]).then(value => console.log(value))
