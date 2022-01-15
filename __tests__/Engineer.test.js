//const { expect, test } = require('@jest/globals');
const Engineer = require("../lib/Engineer");

test("get engineer github name", () => {
  const testValue = "github";
  const engineer = new Engineer("Sam", 2, "ccc@cc.com", testValue);

  expect(engineer.github).toBe(testValue);
});

test("get engineer ", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("ccc", "2", "ccc@cc.com");
  expect(engineer.getRole()).toBe(testValue);
});
