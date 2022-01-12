//const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('getes intern school name', () => {
    const intern = new Intern('Mari', 5, 'email', 'UT', 'intern');

    expect(intern.school).toBe('UT');
});

test('gets role for intern', () => {
    const intern = new Intern('Mari', 5, 'email', 'UT', 'intern');

    expect(intern.getRole()).toEqual(expect.any(String));
});