const elevarAoQuadrado = (numeros) => {

    return numeros.map(num => num * num);
    
}

let numeros = [1, 2, 3, 4, 5];

let numerosAoQuadrado = elevarAoQuadrado(numeros);

console.log(`Números ao quadrado: ${numerosAoQuadrado}` );