class Calculation {
  constructor(name) {
    this.property = name;
  }
  get(calc) {
    return this.property;
  }
  set(calc) {
    this.property = calc;
  }
  calc(a, b, callback) {
    callback(a, b);
  }
  printIndipendentHi(msg) {
    console.log(msg);
  }
  sum(a, b) {
    this.printIndipendentHi("abc");
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
  mul(a, b) {
    return a * b;
  }
  div(a, b) {
    return a / b;
  }
}
const calc = new Calculation();
module.exports = {calc};