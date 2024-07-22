console.log('Party: Il Grande Gatsby')

//recupero l'elemento HTML che mi servirà successivamente

let invitoElement = document.getElementById('invitato')

/* definisco l'Array nel quale inserirò
la lista completa dei nomi degli invitati */

const invitati = ['Gianni', 'Marco', 'Laura', 'Sara', 'Nicola', 'Gabriel', 'Tommaso', 'Carmela', 'Amalia', 'Lucia', 'Mattia', 'Sandra', 'Federico']  //strings array

console.log(invitati)

//chiedo all'utente di inserire il tuo nome

const userName = prompt('Ho bisogno di sapere come ti chiami!')

console.log(userName)

/* inserisco la condizione per verifcare se 
l'utente risulta nella lista degli invitati */


if (invitati.includes(userName)) {

    console.log('Congratulazioni')

    //stampo su html la conferma di presenza in lista
    invitoElement.innerHTML = "Congratulazioni, sei in Lista per l'Evento."

}

else {

    console.log('Mi dispiace!')

    //stampo su html il messaggio di NON presenza in lista
    invitoElement.innerHTML = "Mi dispiace! ma purtroppo il tuo nome non è in lista."
}