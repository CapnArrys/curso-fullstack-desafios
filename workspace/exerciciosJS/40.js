const filtrarMaioresQueDez = (numeros) => {

    return numeros.filter(num => num > 10);

}

let numeros = [5, 10, 15, 20, 25, 30];

let maioresQueDez = filtrarMaioresQueDez(numeros);

console.log(`Números maiores que 10: ${maioresQueDez}`);