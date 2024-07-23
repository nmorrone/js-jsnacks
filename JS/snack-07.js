console.log('Snack-07 - Iniziamo')

/* Scrivo programma che stampa tabellina del 2
fino al raggiungimento del numero 1000 */

//collego elemento HTML che mi servirà

let timeTableElement = document.getElementById('timetable')

//definisco la variabile che aumenterà di valore +2/each
//ovvero quella della tabellina del 2

let twoTimeTable = 0

//definisco un Array che mi servirà per contenere l'elenco
let tabellina = []


/* apro il ciclo FOR con 500 interazioni che sono 
quelle che mi serviranno per il programma */

//2*500=100, numero da raggiungere

for (let i = 0; i < 500; i++) {

    //inserisco la condizione di aumento del valore della variabile
    twoTimeTable = twoTimeTable + 2

    //verifico funzionamento
    console.log(twoTimeTable)

    //inserisco valore all'interno dell'Array
    tabellina.push(' ' + twoTimeTable + ' ')


}

//stampo nella pagina HTML la tabellina completa
timeTableElement.innerHTML = tabellina




