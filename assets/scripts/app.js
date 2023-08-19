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

greetArrows("Max");
greetArrow("Manuel", "Hello, Sayonara");

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello");
    console.log(this.age);
  },
};

console.log(user);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi !");
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();

// Arrays

const hobbies = ["UFC", "Cooking", "Reading"];
console.log(hobbies[2]);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const edittedHobbies = hobbies.map((item) => ({ text: item }));
