function reverseString(str) {
    let cant = str.length;
    let result = '';

    while (cant >= 0) {
        result = result + str.charAt(cant);
        cant--;
    }
    return result;
}


console.log(reverseString("hola") === "aloh");