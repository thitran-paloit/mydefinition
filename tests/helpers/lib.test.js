const lib = require('../../helpers/lib');

describe("getRandomInt", () => {
    it("should be random from 0 - 5", () => {
        const result = lib.getRandomInt(0, 5);

        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(5);
    });
})