// Type: any
// The any type is the most flexible type in TypeScript. Usefull to skip error

// It essentially tells the compiler to skip type checking for a particular variable.

// While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

// When to use any:

// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case


let v: any = 6;

v = "hello"; // no error as it can be "any" type

// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in

console.log(v%10); // no error as it can be "any" type