const { Manager } = require("../lib/Manager");

test("Sets the office number of manager.", () => {
    const testOfficeNumber = 3;
    const employeeSample = new Manager("Johnny", 3, "johnny@duncan.com", testOfficeNumber);
    expect(employeeSample.officeNumber).toBe(testOfficeNumber);
});

test("Gets the office number of the manager using the getOfficeNumber method.", () => {
    const testOfficeNumber = 3;
    const employeeSample = new Manager("Johnny", 3, "johnny@duncan.com", testOfficeNumber);
    expect(employeeSample.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Gets the tested role of manager.", () => {
    const returnedValue = "Manager";
    const employeeSample = new Manager("James", 2, "jamesljenks@gmail.com", 2);
    expect(employeeSample.getRole()).toBe(returnedValue);
});