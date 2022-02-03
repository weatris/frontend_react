import CheckAmountOfOddNumbers from "../../task_2.js";

describe('testing task 2',()=>{
        it('OK tests ', function () {
            expect(CheckAmountOfOddNumbers([1,'e',3,4,5])).toBe(0);
            expect(CheckAmountOfOddNumbers([-1,2,'f',-5])).toBe(2);
            expect(CheckAmountOfOddNumbers([-1])).toBe(1);
        });
        it('not OK tests ', function () {
            expect(CheckAmountOfOddNumbers([])).toBe('array should not be empty');
        });
    }
) ;