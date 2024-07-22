console.log('Snack-02 - Iniziamo')

/* l'utente inserisce 2 parole e il software
stampa la parola che contiene più caratteri */

//definisco le variabili delle parole che verranno inserite dall'utente

const parola1 = prompt('Inserisci una parola a caso')

const parola2 = prompt('Inserisci una seconda parola')

//acquisisco l'elemento html nel quale successivamente stamperò

const printElement = document.getElementById('bigger')

//verifico funzionamento

console.log(parola1, parola2)


/* inserisco le condizioni per stampare la parola più corta prima 
di quella più lunga usando length per far leggere a JS la lunghezza 
dei caratteri delle parole inserite dall'utente */

if (parola1.length > parola2.length) {

    printElement.innerHTML = parola2 + ' ' + parola1

}

else {

    printElement.innerHTML = parola1 + ' ' + parola2
}