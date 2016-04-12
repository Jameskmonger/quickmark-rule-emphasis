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

test('it returns an object with the correct \'original\' for one underscore', (t, input) => {

    let output = emphasis(input);

    t.assert.equal(input, output.original);

}, [
    ['_apples and oranges_'],
    ['_plain text here_'],
    ['_woop dee doo_']
]);
