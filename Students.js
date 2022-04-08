const fs = require('fs');
const { json } = require('node:stream/consumers');








const loadNotes = () => {
    try {
       const data = fs.readFileSync('students.json').toString();
       return json.parse(data) 
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes);
    
    fs.writeFileSync("students.json", saveData);
}













/// add student
const addStudent = (id , name , degree , comment) => {
    const notes = loadNotes();
    const duplicat = notes.find((note) => {
        return note.id === id;
    })
    console.log(duplicat)
    if (!duplicat) {
        let sum = 0 ;
        degree.forEach(eo => {
         sum +=eo   
        });
        notes.push({
            id,
            name,
            degree,
            comment,
            sum
        })
        saveNotes(notes);
        console.log("Saved Succesffully");
    } else {
        console.log('Error duplicate Student')
    }
};

// delet student

const deleteStudent = (id) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.id !== id
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log("Deleted Sucessfully")
}



//read Student

const readStudent = (id) => {
    const notes = loadNotes()
    const note = notes.find((eo) => {
        return eo.id === id
    })

    if (note) {
        console.log(note.name)
    } else {
        console.log('Name (Student) is no found')
    }
}
// list
const listStudent = () => {
    
    const notes = loadNotes()
    notes.forEach(eo => {
        console.log(eo.name , eo.sum)
    });
}




module.exports ={
    addStudent,
    deleteStudent,
    readStudent,
    listStudent,
}