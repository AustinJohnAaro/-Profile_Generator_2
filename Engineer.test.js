let Engineer = require("../lib/Engineer");

test("Can set GitHUB account via constructor", () => {
    let testValue = "GitHubUser";
    let e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    let testValue = "Engineer";
    let e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    let testValue = "GitHubUser";
    let e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

