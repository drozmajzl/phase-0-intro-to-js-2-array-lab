// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    }

function destructivelyRemoveLastCat() {
    cats.pop();
    }

function destructivelyRemoveFirstCat() {
    cats.shift();
    }    

function appendCat(name) {
        var newArray = cats.slice();
        newArray.push(name)
        return newArray
}

function prependCat(name) {
    var newArray = [...cats];
    newArray.unshift(name)
    return newArray
}

function removeLastCat() {
    var newArray = [...cats]
    newArray.pop();
    return newArray
}

function removeFirstCat() {
    var newArray = [...cats]
    newArray.shift();
    return newArray
}

