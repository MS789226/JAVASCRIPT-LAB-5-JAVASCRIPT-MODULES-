APPS.JS

// app.js

import { add } from './mathModule.js';
import multiply from './mathModule.js';
import { toLowerCase, toUpperCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// Using the math functions
const sum = add(5, 10);
const product = multiply(5, 10);
console.log(`Sum: ${sum}`); // Output: Sum: 15
console.log(`Product: ${product}`); // Output: Product: 50

// Using the string functions
const lower = toLowerCase("HELLO WORLD");
const upper = toUpperCase("hello world");
console.log(`Lowercase: ${lower}`); // Output: Lowercase: hello world
console.log(`Uppercase: ${upper}`); // Output: Uppercase: HELLO WORLD

// Using the array functions
const numbers = [1, 2, 3, 4, 5];
const max = findMax(numbers);
const reversed = reverseArray([...numbers]); // 
console.log(`Max: ${max}`); // Output: Max: 5
console.log(`Reversed: ${reversed}`); // Output: Reversed: [5, 4, 3, 2, 1]
