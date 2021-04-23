const fs = require('fs');
const chalk = require('chalk');

/**
 * @description:This function print all the note available
 */
const readNotes = () => {
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            console.log(chalk.red.inverse(err));
        } else {
            console.log(data);
        }
    })
}

const addNote = (title, body) => {
    console.log('adding a note');
    console.log(`the title is ${title} and body is ${body}`)

    // reading the notes 
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            console.log(chalk.red.inverse(err));
        } else {
            const notes = JSON.parse(data);
            console.log(notes.length);
            const duplicateNote = notes.find(note => note.title === title)
            console.log(duplicateNote);
            if (duplicateNote) {
                console.log(chalk.yellow.inverse(`${title} title is already present in note`));
            } else {
                notes.push({ title, body });
                fs.writeFile('notes.json', JSON.stringify(notes), (err) => {
                    if (err) {
                        console.log(chalk.red.inverse(err));
                    } else {
                        console.log(chalk.green.inverse('Successfully added note'));
                    }
                })
            }
        }

    })
}

const removeNote = (title) => {
    console.log(`${title} removing from the notes`)
    // first read the note and see title presence.
    fs.readFile('notes.json', 'utf8', (err, data) => {
        if (err) {
            console.log(chalk.red.inverse(err));
        } else {
            const notes = JSON.parse(data);
            console.log('notes', notes)
            const afterRemovingNotes = notes.filter(note => note.title !== title)
            if (notes.length === afterRemovingNotes.length) {
                console.log(chalk.yellow.inverse(`${title} is not present in notes`))
            } else {
                fs.writeFile('notes.json', JSON.stringify(afterRemovingNotes), (err) => {
                    if (err) {
                        console.log(chalk.red.inverse(err));
                        return;
                    }
                    console.log(chalk.green.inverse(`${title} title is removed from notes`));
                })
            }
        }
    })
}

module.exports = {
    readNotes,
    addNote,
    removeNote,
}