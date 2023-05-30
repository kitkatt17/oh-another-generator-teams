const { Engineer } = require("../lib/engineer");

test("Sets the Github username of engineer.", () => {
    const testGithub = "Johnny-Duncan3";
    const employeeSample = new Engineer("Johnny", 3, "johnny@duncan.com", testGithub);
    expect(employeeSample.github).toBe(testGithub);
});

test("Sets the testing of getGithub will then return github", () => {
    const testGithub = "Johnny-Duncan3";
    const employeeSample = new Engineer("Johnny", 3, "johnny@duncan.com", testGithub);
    expect(employeeSample.getGithub()).toBe(testGithub);
});

test("Gets the tested role of engineer.", () => {
    const returnedValue = "Engineer";
    const employeeSample = new Engineer("Johnny", 3, "johnny@duncan.com", "Johnny-Duncan3");
    expect(employeeSample.getRole()).toBe(returnedValue);
});