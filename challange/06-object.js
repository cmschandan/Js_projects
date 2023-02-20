

const car = {
    make: "Delaas",
    model: "Bugati",
    year: 2000,
    colors: ['grey','red','yellow'],
    hybrid: true,
    drive: function (){
        console.log('driving...')
    },
    stop(){
        console.log('stopped!!')
    }
}

console.log(car.make);
console.log(car.colors[0]);
car.drive();