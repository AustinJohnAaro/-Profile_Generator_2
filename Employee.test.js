let Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    let name = "Austin John Aaro";
    let e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    let testValue = 100;
    let e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguments", () => {
    let testValue = "test@test.com";
    let e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    let testValue = "Austin John Aaro";
    let e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    let testValue = 100;
    let e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    let testValue = "austin1472a@gmail.com";
    let e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    let testValue = "Employee";
    let e = new Employee("Austin John Aaro", 1, "austin1472a@gmail.com");
    expect(e.getRole()).toBe(testValue);
});

