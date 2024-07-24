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

let inputNumber = parseInt(prompt('Inserisci un numero'))

numbers.push(inputNumber)

//creo il ciclo while
while (!numbers.includes(inputNumber)) {

    //chiedo all'utente di inserire un numero
    let inputNumber = parseInt(prompt('Inserisci un numero'))


}