console.log('Snack-08 - Iniziamo')

/*fate generare un numero da 1 a 10 casuale al pc
l'utente dovrà inserire poi un numero
se i numeri sono uguali l'utente vince */

//recupero elemento HTML che mi servirà
const numberElement = document.getElementById('result')

//dichiaro la variabile con il numero generato casualmente
/*arrotondo e moltiplico per 10 così so di poter ottenere
numeri generati casualmente da 1 a 10 */
const botNumber = parseInt(Math.random() * 10)

//chiedo all'utente di inserire un numero
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 10')


if (userNumber == botNumber) {

    //verifico funzionamento
    console.log('Congratulazioni')

    //stampo ella pagina HTML
    numberElement.innerHTML = 'Congratulazioni, hai indovinato il numero generato!'
}

else {

    //richiedo nuovamente l'inserimento
    let userNumber = parseInt(prompt('Inserisci nuovamente un numero ds 1 a 10'))
}