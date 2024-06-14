function decrementar(numeros) {

    return numeros.map(num => num - 1);
    
}

let numeros = [1, 2, 3, 4, 5];

let numerosDecrementados = decrementar(numeros);

console.log(`Números decrementados: ${numerosDecrementados}` );
