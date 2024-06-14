function filtrarMultiplosDeCinco(numeros) {

    return numeros.filter(num => num % 5 === 0);
}

let numeros = [1, 5, 10, 19, 20, 22, 30];

let multiplosDeCinco = filtrarMultiplosDeCinco(numeros);

console.log(`Numeros Múltiplos de 5: ${multiplosDeCinco}` );
