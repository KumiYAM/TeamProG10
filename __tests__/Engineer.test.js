//const { expect, test } = require('@jest/globals');
const Engineer = require("../lib/Engnerr");

test("get engineer github name", () => {
  const engineer = new Engineer("ccc", "2", "ccc@cc.com", "cgub");

  expect(engineer.github).toEqual("cgub");
});

test("get engineer school", () => {
  const engineer = new Engineer("ccc", "2", "ccc@cc.com", "cgub");
  expect(engineer.getSchool()).toEqual(expect.any(String));
});
