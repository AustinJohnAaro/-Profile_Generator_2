let Manager = require("../lib/Manager");
let Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    let testValue = 100;
    let e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    let testValue = "Manager";
    let e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office via getOffice()", () => {
    let testValue = 100;
    let e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});



