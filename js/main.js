// creo una funzione che mi crea numeri casuali con un range definito
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}
// creo la mia variabile per contenere tutti i numeri generati casualmente dal computer
var listaNumeriComputer = [];
var generatoreNumeri;
// creo un ciclo dove genero 16 numeri casuali da inserire nell'arrey numeriComputer
for (i=0; i < 16; i++) {
    // creo un ciclo per verificare se il numero generato è gia presente nell'arrey cosi da impedire la presenza di doppioni
    do {
        generatoreNumeri = Random(1,100);
        console.log(generatoreNumeri);
    } while (listaNumeriComputer.includes(generatoreNumeri) == true);
    listaNumeriComputer.push(generatoreNumeri);
}
console.log(listaNumeriComputer);
// creo la variabile per contenere tutti i numeri generati dall'utente
var listaNumeriUtente = [];
// creo una variabile che mi conteggia quante volte l'utente ha inserito un numero consentito
var numeriInseriti = 0;
// creo un ciclo per chiedere all'utente di inserire un numero fino a quando il numero inserito è presente nella lista dei numeri generati dal computer
// o fino a quando la grandezza dell'arrey è di 84 (quindi non ci sono altri numeri da scegliere al di fuori di quelli presenti nella lista dei numeri generati dal computer)
while (listaNumeriComputer.includes(numeroUtente) == false && listaNumeriUtente.length < 85) {
    var numeroUtente = parseInt(prompt("inserire un numero compreso tra 1 e 100"));
    // se l'utente inserisce un numero non compreso tra 1 e 100 deve rinserire un nuovo numero
    while (numeroUtente < 1 || numeroUtente > 100) {
        alert("numero non consentito per favore inserire un numero compreso tra 1 e 100");
        numeroUtente = parseInt(prompt("inserire un numero compreso tra 1 e 100"));
    }
    // se l'utente ha gia inserito quel numero deve rinserire un nuovo numero
    while (listaNumeriUtente.includes(numeroUtente)) {
        alert("hai gia inserito questo numero")
        numeroUtente = parseInt(prompt("inserire un numero compreso tra 1 e 100"));
    }
    listaNumeriUtente.push(numeroUtente);
    numeriInseriti++;
}
console.log(numeriInseriti);
console.log(listaNumeriUtente);
// verifico se l'utente è riuscito ad inserire tutti i numeri consentiti e in caso non ci sia riuscito gli comunico il suo punteggio
if (listaNumeriUtente.length == 85) {
    alert("complimenti hai selezionato tutti i numeri consentiti");
} else {
    alert("hai selezionato il numero sbagliato il tuo punteggio è: " + numeriInseriti);
}