import * as workWithObject from "./WorkwithObject";

describe("showWorkWithObject", () => {
    beforeEach(
        function () {
            console.log = jest.fn();
        }
    )
    it("is a function", () => {
        expect(workWithObject.showWorkWithObject).toBeInstanceOf(Function);
    });
    it("age 22 has been save from prompt 22", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => 22);
        workWithObject.showWorkWithObject();
        expect(workWithObject.user.age).toBe(22);
    });
    it("admin object has been create with 'role' property equals 'admin'", () => {
        workWithObject.showWorkWithObject();
        expect(workWithObject.admin.role).toBe('admin');
    });
    it("object destructure to separate vars 'name', 'age', 'role'", () => {
        workWithObject.showWorkWithObject();
        expect(console.log.mock.calls[0][0]).toBe('John');
        expect(console.log.mock.calls[0][1]).toBe(22);
        expect(console.log.mock.calls[0][2]).toBe('admin');
    });
})