// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

let map=new Map;
let set=new Set;

function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };
    this.info=function (){
        for(const keys in this){// циклом перебирати і виводити ключ і значення
           console.log(keys, this[keys]);
        }
    };
    this.increaseMaxSpeed =function (newSpeed){
        if (newSpeed > 0) {
          this.maximumSpeed = this.maximumSpeed + newSpeed;
        }
    };
    this.changeYear = function (newValue){
        this.yearOfManufacture = newValue;
    };
    this.addDriver = function (driver){
        this. driver= driver
    };
};

const car=new Car ('Mercedes','USA',1987,90,80);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
console.log(car);
car.changeYear(2020);
console.log(car);
car.addDriver({name:'Dasha'})//тут нужно передавать об'єктом
console.log(car);

