const fs = require('fs');

const getNotes = () => "Your notes ....";

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplacateNotes = notes.filter(note => {
        if (note.title === title) {
            return true;
        }
    })

    if (duplacateNotes.length > 0) {
        console.log(' Already presesnt!!')
    } else {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes);
        console.log('New note added');
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const reamoveNote = (title) => {
    const notes = loadNotes();
    const removedNote = notes.filter(note => {
        if (note.title !== title) {
            return true;
        }
    })
    if (removedNote.length === notes.length) {
        console.log(title + " not present to delete");
    } else {
        console.log(title + " removed");
        saveNotes(removedNote)
    }
    console.log(removedNote);

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    reamoveNote: reamoveNote
};