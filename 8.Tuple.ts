// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly . //order matters in tuple
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);



/// add new elements

ourTuple.push("Hi");

console.log(ourTuple)


// named tuples: Named tuples allow us to provide context for our values at each index.


const graph: [x: number, y: string] = [55.2, "Hi"];

console.log(graph)


//