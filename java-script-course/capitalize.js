// functions that capitalizes only the leading character

// verify that the input is a string
// based on that capitalize 

let string = "HeLP"

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

let example_words = ["hEllo", "WORLD", "hoUSse"];

console.log(example_words.map(word => capitalize(word)))

