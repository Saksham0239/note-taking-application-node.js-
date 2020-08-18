
const yargs=require('yargs');

const fs=require('fs');
const notes=require('./notes');


// console.log(process.argv);//process is a predefined object in node environment
// console.log(yargs.argv);//automatically parses the command 

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: String
        },
        body:{
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove a  note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: String
        }
    },
    handler: function(title){
        notes.removeNotes(title.title);
        }
});


yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        var allNotes=notes.ListNotes();
        console.log('Listing all notes',allNotes);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a  note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,//required: true
            type: String
        }
    },
    handler: function(title){
        notes.readNote(title.title);
        // console.log('Reading a note of title '+title.title);
    }
});

console.log(yargs.argv)