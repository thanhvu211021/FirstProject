const {calc} = require('../src/calc');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Basic Tests', () => {

  it('calc - should call callback one', () => {
    //Arrange
    const spy = sinon.spy();
    //Act
    calc.calc(1, 2, spy);
    //Assert
    sinon.assert.calledOnce(spy);
  })

  it('sumNegative', () => {
    const result = calc.sum(-2, -3);
    expect(result).to.be.equal(-5);
  })

  it('div', () => {
    const result = calc.div(4, 2);
    expect(result).to.be.equal(2);
  })

  it('divZero', () => {
    const result = calc.div(2, 0);
    expect(result).to.be.equal(Infinity);
  })

})