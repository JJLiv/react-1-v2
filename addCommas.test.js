const addCommasv1 = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommasv1).toBe("function");
  });

  test("is successfully converts 1000000", () => {
    let testNum = 1000000;
    expect(addCommasv1(testNum)).toEqual("1,000,000.00");
  });

  test("is successfully converts 1000000", () => {
    let testNum = 1234;
    expect(addCommasv1(testNum)).toEqual("1,234.00");
  });

  test("is successfully converts 1000000", () => {
    let testNum = 9876543210;
    expect(addCommasv1(testNum)).toEqual("9,876,543,210.00");
  });

  test("is successfully converts 1000000", () => {
    let testNum = 6;
    expect(addCommasv1(testNum)).toEqual("6.00");
  });

  test("is successfully converts 1000000", () => {
    let testNum = -10;
    expect(addCommasv1(testNum)).toEqual("-10.00");
  });

  test("is successfully converts 1000000", () => {
    let testNum = -5678;
    expect(addCommasv1(testNum)).toEqual("-5,678.00");
  });

  
});
