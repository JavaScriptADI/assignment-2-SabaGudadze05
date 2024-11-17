// Work in this directory: src
let firstString = "Welcome";
console.log(firstString);

// 3.The difference bettwer "5" and 5 is next. "5", that is a string, so it is a text and not a number , but 5 is a number, int :)

let firstNumber = 512;
console.log(firstNumber);

let firstBoolean = true;
console.log(firstBoolean);

// 5. The boolean result can be provided by operatos, like ==, ===, >, <, <= or >=. For example : 5 === 5, it is true. Output will be true. Aslo 5 > 4 , output will be true, but 4 > 5, Output will be false

let greeting = "Hello";
greeting = greeting.toUpperCase();
console.log(greeting);

let world = "World";
world = world.toLowerCase();
console.log(world);

// 8. The first vallue , is Hello. After method is called it will be the same, because we did not give it to the variable(text) and method worked for itself

// 9. Value is nothing , but output will be undefined

// 10. The error is in syntax. toLowercase() is not function. It is toLowerCase();

let age = Number(prompt("How old are you?"));
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);
// 11. In this code, the main issue lies in the first line. We want to prompt the user for their age, but we should ensure that the input is treated as a number. Instead of creating a new variable, I would use age++ to increment the age directly.

// 12
let name = prompt('What is your name?');
let age2 = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <= 69;// finish the code so that it prints true if the age is in 60s
console.log(`${name} is in sixties: ${isInSixties}`);

// 13. The value of first output is 5, but after this code runs x will become 6

// 14. The value immediatelly will become 6 because ++x increments first and then makes output. Value will be 6 ofc

// 15 x++ adds to number one, but x-- makes opposite,  it will minus to number 1

// 16++x iclements first and returns value, but x++ retuns value first and then inlements

// 17 undefined

// 18 equality opperator
5 === 5
console.log(5===5);

// 19 not equality

5 !== 5
console.log(5 !== 5);

// 20. It concats as a string, like i we want to console 5 + '5', Output will be 55



