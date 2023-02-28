const getPercents = require('./get_percents');

//!Правильный вариант 
xtest('Single test', () => {
    expect(getPercents(10, 100)).toBe(10);
});

//?Неправильный вариант(поставил x в начале, чтоб проверка пропустила его)
xtest('Single test', () => {
    expect(getPercents(11, 100)).toBe(10);
});

//!Я сделаю свой вариант и обычный, напишите мне потом какой вариант вам нравится больше :) 
// 1)Обычный вариант
describe('get percent of the number', () => {
    it('get 2% of 200', () => {
            const result = getPercents(2, 200);
            expect(result).toBe(4);
        }),
        xit('get 10% of 200', () => { //неправильный вариант
            const result = getPercents(10, 200);
            expect(result).toBe(50);
        }),
        it('get 20% of 200', () => {
            const result = getPercents(20, 200);
            expect(result).toBe(40);
        });
});

// 2)Мой вариант
describe('get percent of the number', () => {
    const testCases = [{
        argsOne: 40,
        argsTwo: 300,
        expected: 120
    }, {
        argsOne: 50,
        argsTwo: 100,
        expected: 50
    }, {
        argsOne: 40,
        argsTwo: 1000,
        expected: 400
    }];

    testCases.forEach(test => {
        it(
            `Получаем ${testCases.argsOne}% от ${testCases.argsTwo}`,
            () => {
                const result = getPercents(test.argsOne, test.argsTwo);
                expect(result).toBe(test.expected);
            }
        );
    });
});