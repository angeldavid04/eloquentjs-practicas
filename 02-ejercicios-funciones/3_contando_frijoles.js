function countBs(text) {
    counter = "";

    for (const c of text) {
        if (c.toLowerCase() === "b") {
            counter++;
        }
    }

    return counter;
}

function countChar(text, char) {
    counter = "";

    for (const c of text) {
        if (c.toLowerCase() === char.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4