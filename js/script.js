console.log('JS OK')

//Raccolgli gli elenti dal DOM
const number = document.getElementById('number')

// Creo Variabili di appoggio

let stampa = ''

// ciclo che genera i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
   
    // Se è un multiplo di 3 stampa fizz
    if (i % 3 === 0) {
        
        stampa = 'Fizz'
        
        // Se è un multiplo di 5 stampa fizz
    } else if (i % 5 === 0)
    
        stampa = 'Buzz'
    // altrimenti stampa il resto
    else {
        stampa = i
    }

    console.log(stampa)
}

