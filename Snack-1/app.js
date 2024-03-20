const tableName = "Tavolo VIP"
const guests = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]

function toObject(name, order , tableName){
    return{
        tableName: tableName,
        name : name,
        order : order,

    }
}

const guestsObject =[]

for (let i = 0; i < guests.length; i++ ){
    const guestName = guests[i]
    const order = i + 1
    const guestsObject = toObject(guestName, order, tableName)
    guestsObject.push(guestsObject)
}
console.log(guestsObject)