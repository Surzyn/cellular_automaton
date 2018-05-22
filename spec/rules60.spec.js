import { calculateDynamicRule } from '../src/rules';


describe('rules work fine', () => {
    var rule60;
    beforeAll(() => {
        rule60 = calculateDynamicRule(60);
    })
    
    test('1 rule', () => {
        expect(rule60(false, false, false)).toBe(false);
    })

    test('2 rule', () => {
        expect(rule60(false, false, true)).toBe(false);
    })

    test('3 rule', () => {
        expect(rule60(true, false, true)).toBe(true);
    })

    test('4 rule', () => {
        expect(rule60(true, false, false)).toBe(true);
    })

    test('5 rule', () => {
        expect(rule60(false, true, true)).toBe(true);
    })

    test('6 rule', () => {
        expect(rule60(false, true, false)).toBe(true);
    })

    test('7 rule', () => {
        expect(rule60(false, false, true)).toBe(false);
    })

    test('8 rule', () => {
        expect(rule60(false, false, false)).toBe(false);
    })

})