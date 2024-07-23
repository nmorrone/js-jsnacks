console.log('Snack-06 - Iniziamo')

//recupero l'elemento HTML che mi servirà

const resultElement = document.getElementById('result')

//faccio generare un numero casuale

const botNumber = parseInt(Math.random() * 100)

//Verifico in console
console.log(botNumber)


//chiedo all'utente di inserire un numero

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'))

//verifico in console
console.log(userNumber)

//inserisco la condizione per verificare maggioranza numerica

if (userNumber > botNumber) {

    console.log('Hai Vinto!')
    //stampo nella pagina HTML il risultato
    resultElement.innerHTML = 'Congratulazioni. Hai Vinto!'
}

else if (userNumber < botNumber) {

    console.log('Hai Perso!')
    //stampo nella pagina HTML il risultato
    resultElement.innerHTML = 'Il PC ti ha battuto! Ricarica e Riprova'
}

else {

    console.log('OPS')
    //stampo nella pagina HTML il risultato
    resultElement.innerHTML = 'Abbiamo un pareggio, ricarica e riprova!'
}