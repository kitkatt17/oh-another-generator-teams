const { Intern } = require("../lib/intern");

test("Sets the school of intern.", () => {
    const testSchool = "School Name";
    const employeeSample = new Intern ("Johnny", 3, "johnny@duncan.com", testSchool);
    expect(employeeSample.school).toBe(testSchool);
});

test("Gets the school of intern using the getSchool method.", () => {
    const testSchool = "School Name";
    const employeeSample = new Intern("Johnny", 3, "johnny@duncan.com", testSchool);
    expect(employeeSample.getSchool()).toBe(testSchool);
});

test("Sets the role of intern.", () => {
    const returnedValue = "Intern";
    const employeeSample = new Intern("Johnny", 3, "johnny@duncan.com", "School Name");
    expect(employeeSample.getRole()).toBe(returnedValue);
});