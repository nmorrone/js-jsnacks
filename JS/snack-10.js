console.log('Snack-10 - Iniziamo')

/*il programma chiederà all'utente di inserire numeri 
uno dopo l'altro, quando l'utente inserirà 2 volte lo 
stesso numero, il ciclo si interrompe */

//recupero elemento HTML che mi servirà

const elementResult = document.getElementById('result')

console.log(elementResult)

/* Creo un Array vuoto che conterrà tutti
i numeri che ò'utente inserirà */

let numbers = []

//creo il ciclo while

while (true) {

    //chiedo all'utente di inserire un numero
    let inputNumber = parseInt(prompt('Inserisci un numero'))

    //verifico funzionamento
    console.log(inputNumber)

    //pusho il numero nell'Array
    numbers.push(inputNumber)

    //verifico funzionamento
    console.log(numbers)

    //inserisco la condizione per interrompere il loop
    if () break

}