//const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gtes intern school name', () => {
    const intern = new Intern('Mari', 5, 'email', 'UT', 'intern');

    expect(intern.school).toBe('UT');
});