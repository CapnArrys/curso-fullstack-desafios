const filtrarStringsComA = (strings) => {

    return strings.filter(str => str.startsWith("A"));


}

let strings = ["Amora", "Banana", "Abacaxi", "Laranja", "Acerola"];

let stringsComA = filtrarStringsComA(strings);


console.log(`Strings que começam com A: ${stringsComA}`);