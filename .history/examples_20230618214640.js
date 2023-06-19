var employed = false; // boolean
var age = 24; // number
var name = "First Last"; // string

console.info(typeof employed);
console.info(typeof age);
console.info(typeof name);

var employed = `Yes working @ "RMS", 'I still wor there'`;
console.info(typeof employed);

var skills = [1, "html", "css", true];
console.info(typeof skills, skills[1], skills.length);

var person = {
  name: "Emil",
  age: 18,
  employed: true,
};

console.info(typeof person, person.name);
