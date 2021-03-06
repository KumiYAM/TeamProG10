//const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('can get manager office number', () => {
    const manager = new Manager('Jane', 'email', '00', '1234');
    expect(manager.officeNumber).toBe('1234');
    });

test('get the role of manager', () => {
const manager = new Manager('Jane', 'email', '00', '1234');

expect(manager.getRole()).toEqual('Manager');
});    