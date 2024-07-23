console.log('Snack-05 - Iniziamo')

/* crea un Array vuoti
chiedi all'utente 6 volte di inserire un numero
se il numero è dispari viene aggiunto all'interno dell'Array */

//recupero 

let numeri = []

const numbersElement = document.getElementById('numbers')

//apro il ciclo con 6 interazioni

for (i = 0; i < 6; i++) {

    //chiedo all'utente di inserire un numero casuale
    let inputNumber = parseInt(prompt('Inserisci un numero'))

    //controllo se il numero è dispari
    resto = inputNumber % 2

    /*assegno condizione per la quale se il numero è
    dispari viene aggiunto nell'Array */
    if (resto == 1) {

        numeri.push(inputNumber)
    }

}

//stampo il risultato in console
console.log(numeri)

//stampo sulla pagina HTML
numbersElement.innerHTML = numeri