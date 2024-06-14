const filtrarMultiplosDeTres = (numeros) => {

    return numeros.filter(num => num % 3 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiplosDeTres = filtrarMultiplosDeTres(numeros);

console.log(`Múltiplos de 3: ${multiplosDeTres} `);