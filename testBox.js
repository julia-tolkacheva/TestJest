const power = (x,n) => {
    let resu = 1;
    for(let i=n; i>0; i--)
        resu *= x
    return resu
}

console.log(power(2,19))

function sum(a, b) {
    return a + b;
  }

module.exports = {sum, power};
