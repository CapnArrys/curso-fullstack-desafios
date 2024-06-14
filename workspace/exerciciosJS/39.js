function converterParaDuasCasasDecimais(numeros) {

    return numeros.map(num => num.toFixed(2));
}

let numeros = [1.234, 2.345, 3.456, 4.567];

let numerosFormatados = converterParaDuasCasasDecimais(numeros);

console.log(`Números formatados: ${numerosFormatados}` );
