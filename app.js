const yargs = require('yargs');
const fs = require('fs');
const Students = require('./Students');

yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        id:{
            describe:'This is ID descrition in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is Name descrition in add command',
            type:'string',
            demandOption:true
        },
        degree:{
            describe:'This is dgree descrition in add command',
            demandOption:true,
            type:'array'
        },
        comment:{
            describe:'This is comment description in add command',
            type:'string'
        }
    },
    handler:(z) => {
        Students.addStudent(z.id,z.name,z.degree,z.comment)
    }
})
// Delete Student
yargs.command({
    command:'delete',
    describe:'delete Student',
    builder:{
        id:{
            describe:'This is ID descrition in add command',
            demandOption:true,
            type:'number'
        }

    },
    handler:(z) => {
        Students.deleteStudent(z.id)
    }
})
/// read Student

yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        id:{
            describe:'This is student information in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(z) => {
        Students.readStudent(z.id)
    }
})

// List Student 

yargs.command({
    command:'list',
    describe:'listes Students',
   handler:() => {
    Students.listStudent()
   }

})

yargs.parse()