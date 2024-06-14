function converterParaMinusculas(strings) {
    
    return strings.map(str => str.toLowerCase());
}

let strings = ["MAÇÃ", "BANANA", "LARANJA"];

let stringsMinusculas = converterParaMinusculas(strings);

console.log(`Strings em letras minúsculas: ${stringsMinusculas}` );