function getNumRetFoo(number1){
    return function (number2) {
        return number1 + number2
    }
}

varFoo = getNumRetFoo(6)

// let intervalID= setInterval(function (number2){
//     console.log(varFoo(number2))
// }, 1000, 7)
//
// let timeoutId = setTimeout(function(intId){
//     clearInterval(intId)
// }, 5500, intervalID)

console.log(varFoo(5)) //this will be first!

const su_m = (a,b) => a+b // arrow function

console.log(su_m(1,2))

const power = (x,n) => {
    let resu = 1;
    for(let i=n; i>0; i--)
        resu *= x
    return resu
}

console.log(power(2,19))

function Device(name, power){
    this.name = name
    this.voltage = 220
    this.power = power
    this.switch = false
}

Device.prototype.switchDevice = function () {
    this.switch = !this.switch
    const on_off = this.switch ? 'On' : 'Off'
    console.log(`device ${this.name} is switched ${on_off}`)
}

Device.prototype.getPower = function(){
    return this.switch ? this.power : 0
}

Device.prototype.getCurrent = function () {
    const current = this.power / this.voltage
    return this.switch ? current : 0
}

function Electronics (name, power, batteryPercent, batteryCapacity) {
    this.name = name
    this.power = power
    this.batteryPercent = batteryPercent
    this.batteryCapacity = batteryCapacity
}
Electronics.prototype = new Device()

// Electronics.prototype.chargeBattery = function(chargeTimeHours){
//     this.switch
//     this.batteryPercent += chargeTimeHours * this.getCurrent() * 0.001 //mAH
// }


lamp = new Device('Ikea lamp', 40)
lamp.switchDevice()

laptop = new Electronics("HP laptop", 100 , 50, 4500)
laptop.switchDevice()
let totalPower = lamp.getPower() + laptop.getPower()
console.log(`Total power = ${totalPower} watt`)

laptop.switchDevice()
totalPower = lamp.getPower() + laptop.getPower()
console.log(`Total power = ${totalPower} watt`)

console.log(lamp)
console.log(laptop)

function sum(a, b) {
    return a + b;
  }

module.exports = sum;
