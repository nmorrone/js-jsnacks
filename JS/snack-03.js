console.log('Snack-03 - Iniziamo')

//acquisisco l'elemento HTML che mi servirà per stampre successivamente

let listElement = document.getElementById('numbers')

//definisco la variabile somma che mi servirà alla fine

let somma = 0

/* chiedo all'utente tramite prompt di inserire
10 numeri casuali a sua scelta */

//apro il ciclo che avrà 10 interazioni

for (let i = 0; i < 10; i++) {

    //acquisisco l'input dell'utente
    let inputNumber = parseInt(prompt('Inserisci un numero casuale'))

    //faccio la somma deo numeri via via inseriti
    somma = somma + inputNumber


    //stampo la somma finale sulla pagina html
    listElement.innerHTML = somma



}












