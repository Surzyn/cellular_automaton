import { calculateDynamicRule } from '../src/rules';


describe('rules work fine', () => {
    var rule90;
    beforeAll(() => {
        rule90 = calculateDynamicRule(90);
    })

    test('1 rule', () => {
        expect(rule90(true, true, true)).toBe(false);
    })

    test('2 rule', () => {
        expect(rule90(true, true, false)).toBe(true);
    })

    test('3 rule', () => {
        expect(rule90(true, false, true)).toBe(false);
    })

    test('4 rule', () => {
        expect(rule90(true, false, false)).toBe(true);
    })

    test('5 rule', () => {
        expect(rule90(false, true, true)).toBe(true);
    })

    test('6 rule', () => {
        expect(rule90(false, true, false)).toBe(false);
    })

    test('7 rule', () => {
        expect(rule90(false, false, true)).toBe(true);
    })

    test('8 rule', () => {
        expect(rule90(false, false, false)).toBe(false);
    })

})