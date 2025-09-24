// Скласти розклад на тиждень за домопогою switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською)
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

let dayNumber = prompt('number day of the week');

switch (dayNumber) {
    case '1':
        console.log('Monday');
        console.log('1.sports');
        console.log('2.breakfast');
        break;
    case '2':
        console.log('Tuesday...');
        break;
    case '3':
        console.log('Wednesday...');
        break;
    case '4':
        console.log('Thursday...');
        break;
    case '5':
        console.log('Friday...');
        break;
    case '6':
        console.log('Saturday...');
        break;
    case '7':
        console.log('Sunday...');
        break;
    default:
        console.log('Stop!');
};
