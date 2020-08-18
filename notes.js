const fs =require('fs');

const removeNotes = function (removeNote) {
    const notes=loadNotes();
    var removedArray=notes.filter(function(note){
        return note.title !== removeNote
    })
    if(notes.length===removedArray.length)
    {
        console.log('Given title not present in the file');
    }
    else
    {
        // console.log('Array after removal of the title');
        // console.log('new array',removedArray);
        saveNotes(removedArray);
    }
}

const readNote=function(title){
    const notes=loadNotes();
    const givenNote=notes.filter(function(note){
        return note.title===title
    });
    if(givenNote.length===0)
    {
        console.log('Given Note title not available in the file !!');
    }
    else{
    console.log('Notes details as per the given title  ');
    console.log('Title of the note = ',givenNote[0].title);
    console.log('Contents of the note = ',givenNote[0].body);
    }
}

const addNote=function(title,body){
    const notes=loadNotes();
    const duplicateNotes = notes.filter(function (note) {//filter is a built in method in javascript which returns elements of array which matches the condition
        return note.title === title//if any notes matches it is returned
    })
    console.log("notes",duplicateNotes);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = function (notes) {
    console.log(notes);
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports={
    removeNotes: removeNotes,
    addNote: addNote,
    ListNotes: loadNotes,
    readNote:readNote
}