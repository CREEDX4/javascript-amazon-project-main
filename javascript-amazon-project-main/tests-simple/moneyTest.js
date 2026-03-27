import {formatCurrency} from '../scripts/utils/money.js';


console.log('Running money tests...');
if (formatCurrency(2095) === '20.95'){

    console.log('passed');
} else{
    console.log('failed');
}

console.log('Running money tests with edge cases...(0)');

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
};

console.log('20.01');

if (formatCurrency(2000.5)=== '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}