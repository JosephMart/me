#!/usr/bin/env node

const figlet = require('figlet');

figlet('Joseph Martinsen', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(data);
    console.log('Howdy my name is Joseph Martinsen');
});