function filterObjects(array, key) {
    return array.filter(obj => {
        return Object.keys(key).every(k => obj[k] === key[k]);
    });
}

const arrayOfObjects = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", occupation: "Engineer" },
    { id: 3, country: "USA", hobby: "Reading" },
    { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
    { id: 5, hobby: "Gardening", favoriteColor: "Green" }
];

const keyToFind1 = { name: "Bob" };
const keyToFind2 = { age: 25, occupation: "Artist" };
const keyToFind3 = { age: 30, occupation: "Artist" };

console.log(filterObjects(arrayOfObjects, keyToFind1));
// [{ id: 2, name: "Bob", occupation: "Engineer" }]

console.log(filterObjects(arrayOfObjects, keyToFind2));
//[{ id: 4, name: "Charlie", age: 25, occupation: "Artist" }]

console.log(filterObjects(arrayOfObjects, keyToFind3));
// []
