let user1={
    id:1,
    name: 'sasha',
    age: 31,
    skills:['html', 'js', 'java'],
    wife:{
        name: 'Olya',
        age: 42,
    }
}
console.log(user1);
//звернення до ключа
console.log(user1.id);
console.log(user1['age']);//31

console.log(user1.skills);// ['html', 'js', 'java']
console.log(user1.skills[2]);// java

console.log(user1.wife);
console.log(user1.wife.name);//Olya
