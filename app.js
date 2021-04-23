//  const fs = require('fs');
//  fs.writeFileSync('note.txt','This is created by node.');
//  fs.appendFileSync('note.txt','My name is Dharm!!');

const notes = require('./notes.js');
//  console.log(notes());

const chalk = require('chalk');

//console.log(chalk.inverse.red('Success!'));

// command line input

const yargs = require('yargs');

// add command
//console.log(process.argv[2]);
yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builders: {
        title: {
            describe: 'Note Tital',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: " Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builders: {
        title: {
            describe: 'Title of removing note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.reamoveNote(argv.title);
    }
})

// List Command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log(chalk.blue('Listing all the notes'));
    }
})

// read Command
yargs.command({
    command: 'read',
    describe: 'Reading comment',
    handler: function () {
        console.log(chalk.green('Reading all the comments'));
    }
})
yargs.parse()
//console.log(yargs.argv)