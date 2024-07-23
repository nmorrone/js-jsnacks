console.log('Snack-08 - Iniziamo')

/*fate generare un numero da 1 a 10 casuale al pc
l'utente dovrà inserire poi un numero
se i numeri sono uguali l'utente vince */

//recupero elemento HTML che mi servirà
const numberElement = document.getElementById('result')

//dichiaro la variabile con il numero generato casualmente
/*arrotondo e moltiplico per 10 così so di poter ottenere
let  generati casualmente da 1 a 10 */
let botNumber = parseInt(Math.random() * 10)

//verifico funzionamento
console.log(botNumber)

//apro il ciclo WHILE

//inserisco la condizione che deve essere vera per interrompere il ciclo
while (true) {


    //chiedo all'utente di inserire un numero
    let userNumber = parseInt(prompt('Inserisci un numero da 1 a 10'))

    //Verifico funzionamento
    console.log(userNumber)


    //condizione per interrompere il ciclo
    //i numeri devono essere uguali
    if (botNumber === userNumber) break


}


//stampo il risultato nella pagina HTML
numberElement.innerHTML = 'Congratulazioni, hai indovinato il numero generato dal BOT'


