
const numberMin = (numbers) => {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};

let asd=[4668,7,78,2432,567,990,0,53,3,0.6,-76];
let min=numberMin (asd);
console.log(min);

