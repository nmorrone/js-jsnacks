//utente inserisce 2 numeri, console stampa numero maggiore


console.log('Snack-01 Iniziamo')

//acquisisco elemente html 

const biggerNumber = document.getElementById('bigger')

/*inserisco i due comandi prompts per
far inserire i numeri dall'utente in successione */

let firstNumber = parseFloat(prompt('Inserisci un numero casuale'))

let secondNumber = parseFloat(prompt('Inserisci un altro numero casuale'))


console.log(firstNumber, secondNumber)


//inserisco la condizione per la maggioranza
//console deve stampare numero maggiore
//con l'operazione di "stampare" anche sul foglio HTML

if (firstNumber > secondNumber) {

    biggerNumber.innerHTML = firstNumber
    console.log(firstNumber)

}

else {

    biggerNumber.innerHTML = secondNumber
    console.log(secondNumber)
}

//fine