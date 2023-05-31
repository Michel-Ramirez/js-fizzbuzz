console.log('JS OK')

//Raccolgli gli elenti dal DOM
const number = document.getElementById('number')

// Creo Variabili di appoggio
let stamp = ''
let box = ''

// ciclo che genera i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
   
    // Se è un multiplo di 3 stampa fizz
    if (i % 3 === 0 && i % 5 === 0 ){

        stamp = 'FizzBuzz'

    } else if (i % 3 === 0) {
        
        stamp = 'Fizz'
        
        // Se è un multiplo di 5 stampa fizz
    } else if (i % 5 === 0)
    
        stamp = 'Buzz'
    // altrimenti stampa il resto
    else {
        stamp = i
    }

    console.log(stamp)
}

box = `<div>${stamp}</div>`;

number.innerHTML = box;