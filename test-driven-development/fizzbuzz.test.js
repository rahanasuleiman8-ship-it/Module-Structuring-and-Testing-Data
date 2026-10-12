import {fizzbuzz} from './fizzbuzz.js';
import assert from 'node:assert';
import {test, describe} from 'node:test';

describe('division by 3 and 5', () => { 

    test('15 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(15), "fizzbuzz");
    });

    test('30 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(30), "fizzbuzz");
    });

    test('90 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(90), "fizzbuzz");
    });

});


describe('returning the number as a string', () => { 

    test('1 returns "1"', () => {
        assert.equal(fizzbuzz(1), "1");
    });

    test('4 returns "4"', () => {
        assert.equal(fizzbuzz(4), "4");
    });

    test('91 returns "91"', () => {
        assert.equal(fizzbuzz(91), "91");
    });

});