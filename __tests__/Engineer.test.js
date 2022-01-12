//const { expect, test } = require('@jest/globals');
const Engineer = require("../lib/Employee")


test("get engineer github name", () => {
    const engineer = new Engineer('Jane', 1, 'email', 'janehub');

    //expect(engineer.githubName).toEqual('janehub');
});

