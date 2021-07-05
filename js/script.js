/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// 1 - costruire ciclo for che conti fino a 100
// 2 - if else con modulo
//2a - log per controllo; 
// 3 - stampa su html
// pro tip - usare sempre variabile di appoggio per stampare più elementi di un ciclo for su html altrimenti verranno sovrascritti

//variables
var display = document.getElementById('count');

//variabile di appoggio
var numberPrint = '';

//for cycle 

for (var i = 1; i <= 100; i++) {

    //conditions

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        numberPrint += '<li style = color:red;>' + 'FizzBuzz' + '</li>';

    } else if (i % 3 === 0) {
        console.log('Fizz');
        numberPrint += '<li style = color:orange;>' + 'Fizz' + '</li>';

    }else if (i % 5 === 0) {
        console.log('Buzz');
        numberPrint += '<li style = color:yellowgreen;>' + 'Buzz' + '</li>';

    } else {
        console.log(i);
        numberPrint += '<li>' + i + '</li>';
    }
}

//output

display.innerHTML = numberPrint;