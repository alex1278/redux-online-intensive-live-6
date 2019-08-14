// Core
import { compose } from 'redux';

const func1 = (a, b) => {
    console.log('1: composition start');

    return a + b;
};

const func2 = (value) => {
    console.log('2: composition progressing');

    return value ** value;
};

const func3 = (value) => {
    console.log('3: composition ends');

    return `${value} ✓`;
};

console.log('→', compose(func3, func2, func1)(2, 3));
