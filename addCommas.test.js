const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("Test transition from number to string", () => {
  test("it should return a string", () => {
    const numToString = addCommas(1234)
    expect(typeof numToString).toBe('string')
  })
  test("it should put commas in proper place", () => {
    const numToString = addCommas(9876543210)
    expect(numToString).toEqual('9,876,543,210')
  })
})