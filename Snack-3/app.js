// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bike = [
    {
        name : "ENVE MELEE 2024",
        peso : 850,
    },

    {
        name : "SCOTT ADDICT RC 10 2024",
        peso : 700,

    },
    {
        name : "CANNONDALE SYNAPSE CARBON 1 RLE 2024",
        peso :  940,

    },
    {
        name : "SCOTT ADDICT 10 YELLOW 2024",
        peso :  870,

    },
    {
        name : "SCOTT FOIL RC 20 2024",
        peso :  1250,

    },

    {
        name :"SCOTT CR1 PRO MIS.M 2013", 
        peso :  640,

    },
    
]
console.log(bike)

let lighterBike = bike[0]

for(let i = 1; i < bike.length; i++){
    const currentBike = bike[i]
    if(currentBike.peso < lighterBike.peso){
        lighterBike = currentBike
    }
}
const {name, peso} = lighterBike
console.log(`La bici più leggera è ${name} che pesa ${peso}`)