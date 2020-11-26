const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    // console.log(duplicateNote) // to debug
    // console.log(title)

    debugger

    if (!duplicateNote /* === undefined */ ) {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('New Note added !'))
    }
    else {
        console.log(chalk.red.inverse.bold('Note Title taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    if (notes.length > notestokeep.length)
    {
        console.log(chalk.green.inverse.bold('NOTE REMOVED !'))
        saveNotes(notestokeep)
    }
    else{
        console.log(chalk.red.inverse.bold('NO NOTE FOUND !'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.yellow("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue.inverse.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse.bold("NOTE NOT FOUND !"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSO/*N*/)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return[]
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}