function greet(name) {
  name = prompt("What is your name?");
  alert(`Hello, ${name}!`);
}
let age = prompt("How old are you?");

confirm(age <= 17 ? "Did you have birthday?" : "Thanks for your answer.");
