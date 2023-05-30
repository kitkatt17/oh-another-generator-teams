const { Employee } = require("../lib/employee");

test("Creates a new employee sample.", () => {
    const employeeSample = new Employee();
    expect(typeof (employeeSample)).toBe("object");
});

test("Sets the testing name of employee.", () => {
    const name = "Johnny";
    const employeeSample = new Employee(name);
    expect(employeeSample.name).toBe(name);
});

test("Sets the testing ID of employee.", () => {
    const id = 3;
    const employeeSample = new Employee("Johnny", id);
    expect(employeeSample.id).toBe(id);
});

test("Sets the testing email of employee.", () => {
    const email = "johnny@duncan.com";
    const employeeSample = new Employee("Johnny", 3, email);
    expect(employeeSample.email).toBe(email);
});

test("Gets the name of employee using getName method.", () => {
    const testName = "Johnny";
    const employeeSample = new Employee(testName);
    expect(employeeSample.getName()).toBe(testName);
});

test("Gets the ID of employee using getId method.", () => {
    const testID = 3;
    const employeeSample = new Employee("Johnny", testID);
    expect(employeeSample.getId()).toBe(testID);
});

test("Gets the email of the employee using getEmail method.", () => {
    const testEmail = "johnny@duncan.com";
    const employeeSample = new Employee("Johnny", 3, testEmail);
    expect(employeeSample.getEmail()).toBe(testEmail);
});

test("Sets the testing of employee role.", () => {
    const expectedRole = "Employee";
    const employeeSample = new Employee("Johnny", 3, "johnny@duncan.com");
    expect(employeeSample.getRole()).toBe(expectedRole);
});