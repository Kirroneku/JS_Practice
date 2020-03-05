import deepComp from './deep_comp.js';

obj1 = {
    'yes': 1,
    'no': 2,
    'new': {
        'yes': 1,
        'no': 2
    }
}

obj2 = {
    'yes': 1,
    'no': 2,
    'new': {
        'yes': 1,
        'no': 2
    }
}

test('objects', () => {
    expect(deepComp(obj1, obj2)).toBe(true);
})