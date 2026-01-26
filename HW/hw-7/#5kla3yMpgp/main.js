//#5kla3yMpgp
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car


class Car {
    constructor(model, manufacturer,year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    };
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        for(const keys in this){
            console.log(keys, this[keys]);
        }
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newValue){
        this.year = newValue
    };
     addDriver (driver){
        this.driver = driver;
     };
};
 const car = new Car ('Audi','Germany',2017,300,120);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed (20);
car.changeYear(2023);
car.addDriver('Roma')
console.log(car);
