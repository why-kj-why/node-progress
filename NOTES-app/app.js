const ch = require('chalk')
const notes = require('./notes.js')
const yargs = require("yargs")
const { describe } = require('yargs')

// Customize yargs version
yargs.version("1.1.0")

// add, remove, read, list : notes

// add command
yargs.command({
    command : "add",
    describe : "Add a new note",
    builder : {
        title : { 
            describe : "Title of note",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "main content",
            demandOption : true,
            type : 'string',
        },
    },
    handler (argv) 
                { 
                    notes.addNote(argv.title,argv.body) 
                }
})

// remove command
yargs.command({
    command : "remove",
    describe : "Remove a note",
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

// read command
yargs.command({
    command : "read",
    describe : "Read a note",
    builder : {
        title : {
            describe : "Note title",
            demand : true,
            type : "string"
        }
    },
    handler(argv) { notes.readNote(argv.title) }
})

// list command
yargs.command({
    command : "list",
    describe : "List all notes",
    // ES6 method syntax
    handler () { notes.listNotes() }
})

 yargs.parse()

// console.log(yargs.argv)