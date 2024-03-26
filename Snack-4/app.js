// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

    const footballTeam = [
        {
            name : "juventus",
            goal : 0,
            fouls : 0,
        },
        {
            name : "milan",
            goal : 0,
            fouls : 0,
        },
        {
            name : "roma",
            goal : 0,
            fouls : 0,
        },
        {
            name : "inter",
            goal : 0,
            fouls : 0,
        },
        {
            name : "atalanta",
            goal : 0,
            fouls : 0,
        },
    ]
    console.log(footballTeam)

    function random(max){
        return Math.floor(Math.random() * max) + 1
    }

    console.log(random(10))

    footballTeam.forEach(team => {
        team.goal = random(50)
        team.fouls = random(50)
    })
    console.log(footballTeam)


    const messages = footballTeam.map((team) =>{
        const { name, fouls} = team
        return `La squadra ${team.name} ha subito ${team.fouls} falli`
    })

   console.log(messages)