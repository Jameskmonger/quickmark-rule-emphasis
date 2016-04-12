'use strict';

const test = require('modunit');
const emphasis = require('./index');

test('it returns undefined for plain text', (t, input) => {

    let output = emphasis(input);

    t.assert.equal(undefined, output);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns undefined for tildes', (t, input) => {

    let output = emphasis(input);

    t.assert.equal(undefined, output);

}, [
    ['~~apples and oranges~~'],
    ['~~plain text here~~'],
    ['~~woop dee doo~~']
]);
