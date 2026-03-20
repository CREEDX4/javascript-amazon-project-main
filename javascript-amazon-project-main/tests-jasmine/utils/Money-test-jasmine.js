import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('handles edge case 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    }); 

    it ('handles edge case 2000.5', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});


if (formatCurrency(2000.5)=== '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}