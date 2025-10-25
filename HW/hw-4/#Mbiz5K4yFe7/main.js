//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(height, radius) {
    return 2*Math.PI * radius*(height+radius);
};

let AreaCylinder = cylinderArea(14,6);
console.log(AreaCylinder);//753.9822368615503
