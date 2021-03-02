// creo la mia variabile per contenere tutti i numeri generati casualmente dal computer
var listaNumeriComputer = [];
var generatoreNumeri;
// creo la variabile per contenere tutti i numeri generati dall'utente
var listaNumeriUtente = [];
var numeroUtente;
// creo una variabile che mi conteggia quante volte l'utente ha inserito un numero consentito
numeriInseriti = 0;
// creo una variabile per stabilire la difficolta
var difficolta = parseInt(prompt("inserire un valore compreso tra 0 e 2 per stabilire la difficoltà"));
while (difficolta < 0 || difficolta > 2 ) {
    alert("non hai inserito uno dei valori richiesti");
    var difficolta = parseInt(prompt("inserire un valore compreso tra 0 e 2 per stabilire la difficoltà"));
}
// creo una costante che indica le bombe (i numeri da non inserire), una variabile che indica il massimo dei numeri generati random e una variabile che indica il numero minimo da generare
const bombe = 16;
var max;
var min = 1;
// cambio il valore di max in base alla difficolta scelta
if (difficolta == 0) {
    max = 100;
} else if (difficolta == 1) {
    max = 80;
} else if (difficolta == 2) {
    max = 50;
}
// creo uno switch in cui in base alla difficoltà cambieranno delle regole
switch (difficolta) {
    // difficoltà = 0:  i numeri generati dal computer saranno compresi tra 1 e 100
    case 0:
        if (CampoMinato(difficolta) == true) {
            alert("complimenti hai selezionato tutti i numeri consentiti");
        } else {
            alert("hai selezionato il numero sbagliato il tuo punteggio è: " + numeriInseriti);
        }
        do {
            var rigioca = prompt("vuoi rigiocare?");
        } while (rigioca != "si" && rigioca != "no");
        if (rigioca == "si")
        location.reload();
        break;

    // difficoltà = 1:  i numeri generati dal computer saranno compresi tra 1 e 80
    case 1:
        if (CampoMinato(difficolta) == true) {
            alert("complimenti hai selezionato tutti i numeri consentiti");
        } else {
            alert("hai selezionato il numero sbagliato il tuo punteggio è: " + numeriInseriti);
        }
        do {
            var rigioca = prompt("vuoi rigiocare?");
        } while (rigioca != "si" && rigioca != "no");
        if (rigioca == "si")
        location.reload();
        break;
    // difficoltà = 2:  i numeri generati dal computer saranno compresi tra 1 e 50
    case 2:
        if (CampoMinato(difficolta) == true) {
            alert("complimenti hai selezionato tutti i numeri consentiti");
        } else {
            alert("hai selezionato il numero sbagliato il tuo punteggio è: " + numeriInseriti);
        }
        do {
            var rigioca = prompt("vuoi rigiocare?");
        } while (rigioca != "si" && rigioca != "no");
        if (rigioca == "si")
        location.reload(); 
        break;
}

// creo una funzione che mi crea numeri casuali con un range definito
function Random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}

function isInArrey(arrey, value) {
    var flag = false;
    for(var i=0; i < arrey.length && flag == false; i++) {
        if (value == arrey[i])
            flag = true;
    }
    return flag;
}

function CampoMinato(difficolta) {
    vittoria = false;
    // creo un ciclo dove genero 16 numeri casuali da inserire nell'arrey numeriComputer
    for (i=0; i < bombe; i++) {
        // creo un ciclo per verificare se il numero generato è gia presente nell'arrey cosi da impedire la presenza di doppioni
        do {
            generatoreNumeri = Random(min,max);
            console.log(generatoreNumeri);
        } while (isInArrey(listaNumeriComputer, generatoreNumeri) == true);
        listaNumeriComputer.push(generatoreNumeri);
    }
    console.log(listaNumeriComputer);
    // creo un ciclo per chiedere all'utente di inserire un numero fino a quando il numero inserito è presente nella lista dei numeri generati dal computer
    // o fino a quando la grandezza dell'arrey è di 84 (quindi non ci sono altri numeri da scegliere al di fuori di quelli presenti nella lista dei numeri generati dal computer)
    while (isInArrey(listaNumeriComputer, numeroUtente) == false && listaNumeriUtente.length < (max - bombe)) {
        var numeroUtente = parseInt(prompt("inserire un numero compreso tra " + min + " e " + max));
        // se l'utente inserisce un numero non compreso tra 1 e 100 deve rinserire un nuovo numero
        while (numeroUtente < min || numeroUtente > max) {
            alert("numero non consentito per favore inserire un numero compreso tra " + min + " e " + max);
            numeroUtente = parseInt(prompt("inserire un numero compreso tra " + min + " e " + max));
        }
        // se l'utente ha gia inserito quel numero deve rinserire un nuovo numero
        while (isInArrey(listaNumeriUtente, numeroUtente) == true) {
            alert("hai gia inserito questo numero")
            numeroUtente = parseInt(prompt("inserire un numero compreso tra " + min + " e " + max));
        }
        listaNumeriUtente.push(numeroUtente);
        numeriInseriti++;
    }
    console.log(numeriInseriti);
    console.log(listaNumeriUtente);
    // verifico se l'utente è riuscito ad inserire tutti i numeri consentiti e in caso non ci sia riuscito gli comunico il suo punteggio
    if (listaNumeriUtente.length == (max - bombe)) {
        vittoria = true;
    } 
    return vittoria;
}