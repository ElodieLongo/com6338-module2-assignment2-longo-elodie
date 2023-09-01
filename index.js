function greet() {
  let name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  let age = prompt("How old are you?");
  age = parseInt(age);


let YesBirthday = confirm("Did you have a birthday yet this year?");

let birthYear;

if (YesBirthday) {
   birthYear = new Date().getFullYear() - age;
  } else {
    birthYear = new Date().getFullYear() - age + 1;
  }

  alert(`You were born in ${birthYear}!`);
}
  
