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
    ['~apples and oranges~'],
    ['~plain text here~'],
    ['~woop dee doo~']
]);

test('it returns an object with the correct \'original\' for one underscore', (t, input) => {

    let output = emphasis(input);

    t.assert.equal(input, output.original);

}, [
    ['_apples and oranges_'],
    ['_plain text here_'],
    ['_woop dee doo_']
]);

test('it returns an object with the correct \'original\' for one asterisk', (t, input) => {

    let output = emphasis(input);

    t.assert.equal(input, output.original);

}, [
    ['*apples and oranges*'],
    ['*plain text here*'],
    ['*woop dee doo*']
]);

test('it returns an object with the correct \'parsed\' for one underscore', (t, input) => {

    let tag = '_';

    let output = emphasis(tag + input + tag);

    t.assert.equal(input, output.parsed);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns an object with the correct \'parsed\' for one asterisk', (t, input) => {

    let tag = '*';

    let output = emphasis(tag + input + tag);

    t.assert.equal(input, output.parsed);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns an object with the correct \'original\' for one underscore with text after', (t, input, original) => {

    let output = emphasis(input);

    t.assert.equal(original, output.original);

}, [
    ['_apples and oranges_ are my favourite', '_apples and oranges_'],
    ['_plain text here_ bla bla bla', '_plain text here_'],
    ['_woop dee doo_ and a whippy woo', '_woop dee doo_']
]);
