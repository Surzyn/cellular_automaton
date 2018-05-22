import { calculateDynamicRule } from '../src/rules';


describe('rules work fine', () => {
    var rule30;
    beforeAll(() => {
        rule30 = calculateDynamicRule(30);
    })
    test('1 rule', () => {
        expect(rule30(true, true, true)).toBe(false);
    })

    test('2 rule', () => {
        expect(rule30(true, true, false)).toBe(false);
    })

    test('3 rule', () => {
        expect(rule30(true, false, true)).toBe(false);
    })

    test('4 rule', () => {
        expect(rule30(true, false, false)).toBe(true);
    })

    test('5 rule', () => {
        expect(rule30(false, true, true)).toBe(true);
    })

    test('6 rule', () => {
        expect(rule30(false, true, false)).toBe(true);
    })

    test('7 rule', () => {
        expect(rule30(false, false, true)).toBe(true);
    })

    test('8 rule', () => {
        expect(rule30(false, false, false)).toBe(false);
    })

})