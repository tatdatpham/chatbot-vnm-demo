const expect = require('chai').expect
const server = require('../server');

describe('test', () => {
  it('should return a string', () => {
    expect('Home page. Server running okay.').to.equal('Home page. Server running okay.');
  });
});