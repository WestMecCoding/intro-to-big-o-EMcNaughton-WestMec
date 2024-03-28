let someStr = "Lorem ipsum dolor"

function reverseStr(str) {
    return str.split("").reverse().join("")
}

function reverseAlternate(str) {
    var result = str
    for (let i = 0; i < str.length; i++) {
        result = result[str.length-1]+result
    }
    return result;
}

console.log(someStr);
console.log(reverseStr(someStr));
console.log(reverseAlternate(someStr));
