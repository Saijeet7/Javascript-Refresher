// import { apiKey, abc as content } from "./util.js";
// import anyName  from "./util.js";

// import * as util from "./util.js";

// console.log(util.default, util.apiKey, util.abc);

let userMessage = "Hello World";
console.log("Hello World");
console.log(userMessage);

console.log("hello" + "world");

// Basic function

function greet() {
  console.log("Hello World");
}

greet();
greet();

const greetArrow = (userName, userMessage = "Hello !") => {
  console.log(userName);
  console.log(userMessage);
};

const greetArrows = (userName, userMessage = "Hello !") => {
  return userMessage + " " + userName + "I am Rockstar";
};

greetArrow("Max");
greetArrow("Manuel", "Hello, Sayonara");
