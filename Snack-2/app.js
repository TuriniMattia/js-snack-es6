const students = [
    {
        id : 213,
        name : "Marco della Rovere",    
        grades : 78,
    },
    {
        id : 110,
        name : "Paola Cortellessa",    
        grades : 96,
    },
    {
        id : 250,
        name : "Andrea Mantegna",    
        grades : 48,
    },
    {
        id : 145,
        name : " Gaia Borromini",    
        grades : 74,
    },
    {
        id : 213,
        name : "Luigi Grimaldello",    
        grades : 68,
    },
    {
        id : 102,
        name : " Piero della Francesca ",    
        grades : 50,
    },
    {
        id : 120,
        name : "Francesca da Polenta",    
        grades : 84,
    },
]

const student = {
    id : 213,
    name : "Marco della Rovere",    
    grades : 78,
}

console.log(students)

const formattedStudents = []

for(let i = 0; i < students.length; i++){
    const name = students[i].name
    const id = students[i].id
    const grades = students[i].grades

    const student = {
        id : id,
        name : name.toUpperCase(),
        grades : grades
    }
    formattedStudents.push(student)
}
console.log(formattedStudents)

const topStupends = []
const bestStudent = []


for (let i = 0; i < formattedStudents.length; i++ ){
    const student = formattedStudents[i]

    if(student.grades > 70){
        bestStudent.push(student)
    }

    if(student.grades > 70 && student.id > 120){
        topStupends.push(student)
    }


}

console.log(topStupends)
console.log(bestStudent)