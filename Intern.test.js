let Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    let testValue = "UC Berkeley";
    let e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    let testValue = "Intern";
    let e = new Intern("Foo", 1, "test@test.com", "UC Berkeley");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    let testValue = "UC Berkeley";
    let e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});



