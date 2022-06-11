"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("", () => {
    test('debe sumar [10] y [20] y devolver [30] con la function #sumar', () => {
        const primerValor = 10;
        const segundoValor = 20;
        const resultExpect = 30;
        let result;
        result = (0, index_1.sumar)(primerValor, segundoValor);
        expect(result).toBe(resultExpect);
    });
});
