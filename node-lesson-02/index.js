// assign parsed content to var
const students = require('./array_export');

// add age property to Ronna
students.forEach((student)=> { //iterate through array
    if(student.firstName === "Ronna"){ //if FN prop at index x is Ronna...
        student.age = 23; //add the age property as instructed
    }
});


//iterate all kv pairs and check if age exists 

students.forEach((student) => {

    if(student.hasOwnProperty('age')){ //if hasOwnProperty returns True then print yes it contains
        console.log(`Student record for ${student.firstName} ${student.lastName} contains an age --> ${student.hasOwnProperty('age')} was returned from the hasOwnProperty function \n`)
    } else{ //if doesnt then print
        console.log(`Student record for ${student.firstName} ${student.lastName} does not contain an age --> ${student.hasOwnProperty('age')} was returned from the hasOwnProperty function \n`)
   
    }
});

//display in terminal
console.log(students);

//exit node.js

process.exit()

