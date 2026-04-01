const mean = require('./notation');

describe('Mean function tests', () => {
    
    test('calculates mean of array [12, 15, 18, 10, 14]', () => {
        const scores = [12, 15, 18, 10, 14];
        expect(mean(scores)).toBe(13.8);
    });

    test('calculates mean of array [8, 11, 13, 16]', () => {
        const scores = [8, 11, 13, 16];
        expect(mean(scores)).toBe(12);
    });

    test('calculates mean of array [15, 11, 12, 14, 10]', () => {
        const scores = [15, 11, 12, 14, 10];
        expect(mean(scores)).toBe(12.4);
    });

    test('calculates mean of array [10, 11, 10, 12, 10, 13]', () => {
        const scores = [10, 11, 10, 12, 10, 13];
        expect(mean(scores)).toBeCloseTo(11, 1);
    });

    test('returns 0 for empty array', () => {
        expect(mean([])).toBe(0);
    });

    test('calculates mean for single element array', () => {
        expect(mean([5])).toBe(5);
    });

    test('handles negative numbers', () => {
        const scores = [-5, -10, -15];
        expect(mean(scores)).toBe(-10);
    });

    test('handles decimal numbers', () => {
        const scores = [1.5, 2.5, 3.5];
        expect(mean(scores)).toBeCloseTo(2.5, 1);
    });
});