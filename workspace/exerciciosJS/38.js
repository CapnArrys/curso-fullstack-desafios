function filtrarStringsComA(strings) {

    return strings.filter(str => str.endsWith("a"));

}

let frutas = ["maçã", "banana", "laranja", "uva", "Pêssego", "Maracujá"];

let stringsTerminandoComA = filtrarStringsComA(frutas);

console.log(`Strings que terminam com 'a': ${stringsTerminandoComA}` );