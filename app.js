console.log('Note-App is in process Start');

const yargs = require('yargs');
const note = require('./noteOperation.js')
console.log(note);

// adding note
yargs.command({
    command: 'add',
    describe: 'to add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        const { title, body } = argv;
        note.addNote(title, body);
    }
});

// listing the notes 
yargs.command({
    command: 'list',
    describe: 'To list all the notes',
    handler: () => {
        console.log('listing all the notes')
    }
})

// remove the note
yargs.command({
    command: 'remove',
    describe: 'to remove a note',
    handler: (argv) => {
        const {title} = argv;
        //console.log('removing the note');
        note.removeNote(title);
    }
})

// read the note 
yargs.command({
    command: 'read',
    describe: 'to read a note',
    handler: () => {
        console.log('reading the note')
    }
})

yargs.command({
    command: 'read',
    describe: 'to read all the note',
    handler: () => {
        note.readNotes();
    }
})
console.log(yargs.argv)
yargs.parse();