{
let table1 = game.tables.getName("EG QG Artefact Name P1")
let table2 = game.tables.getName("EG QG Artefact Name P2")

let roll1 = table1.roll().results[0].text;
let roll2 = table2.roll().results[0].text;

let content = `Artefact Name: ${roll1}${roll2}.`

ChatMessage.create({content: content})
}