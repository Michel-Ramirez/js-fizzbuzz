console.log('JS ok')
// raccolgo gli elementi dal dom
const buttonDado = document.getElementById('btn-dadi');
const resultUser = document.getElementById('numero-utente');
const resultCpu = document.getElementById('numero-cpu');
const winner = document.getElementById('winner')

//il bottone al click avvia due cicli per generare i numeri randmon
buttonDado.addEventListener('click', function(){

    //variabile di appoggio dove salverò il risultato di i
    let userDado = Math.floor(Math.random() * 6) +1;
    let cpuDado = Math.floor(Math.random() * 6) +1;

    // controllo se il numero del utente è maggiore di quello generato per la cpu allora stampa in console 'ha vinto l'utente', ALTRIMENTI stampa in console 'Ha vinto la cpu'
    if (userDado > cpuDado){
        winner.innerText = 'Sei fortunato! Hai vinto'
        console.log("Ha vinto l'utente");
    } else if (userDado < cpuDado) {
        winner.innerText = 'Si stato sfortunato! Ha vinto la CPU'
        console.log('Ha vinto la cpu');
    } else {
        winner.innerText = 'Pareggio'
        console.log('Pareggio')
    }
    
    resultUser.innerHTML = userDado
    resultCpu.innerHTML = cpuDado

    console.log(userDado, cpuDado)
});    


