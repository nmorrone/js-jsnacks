console.log('Snack-03 - Iniziamo')

//acquisisco l'elemento HTML che mi servirà per stampre successivamente

const listElement = document.getElementById('numbers')

/* chiedo per 10 volte all'utente di 
inserire dei numeri casuali e li "salvo"
in delle variabili definite */

/* apro il ciclo che si chiuderà al termine della
decima interazione con richiesta dati */

for (let i = 0; i < 10; i++) {


    /*inserisco la condizione per far continuare il loop
    e far chiedere nuovamente all'utente un numero da inserire */

    if (i < 10) {

        //definisco la variabile del numero inserito dall'utente
        inputNumber = parseInt(prompt('Inserisci un numero casuale'))


        /* stampo il numero inserito con i tag html in modo che
        ella pagina mi vengano poi successivamente visualizzati
        i numeri in un formato di elenco/lista */
        listElement.innerHTML = '<li> ' + inputNumber + '</li>'
    }


}