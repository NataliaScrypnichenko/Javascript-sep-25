
 let users = [
     {skills:['html','mysql', 'mongo'], id:1, name:'vasya', age:31, status:true},
     {skills:['html','js'], id:1, name:'petya', age:33, status:false},
     {skills:['html','js'], id:1, name:'anna', age:28, status:true},
     {skills:['html','mysql', 'mongo'], id:1, name:'olya', age:29, status:false},
 ]
console.log(users);
console.log(users [0]);
console.log(users [0] ['age']);
//можемо створити зміну
 let user0= users[0];//зменшення навантаження
 console.log(user0);//  {id:1, name:'vasya', age:31, status:true},
 console.log(user0,['age']);
///
console.log(users);
console.log(users [0]);
console.log(users[0].skills);
 console.log(users[0].skills[2]);//mongo
 console.log(users[0]['skills'][2]);
/////можемо створити зміну
 let user=users[0];
 let skills = user['skills'];
 console.log(skills[2]);//mongo

