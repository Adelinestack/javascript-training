const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const today = new Date();
const currentYear = today.getFullYear();

const isSome19orOlder = people.some(function(person) {
  return currentYear - person.year >= 19;
});
console.log(isSome19orOlder);

// Array.prototype.every() // is everyone 19 or older?
const isEveryone19orOlder = people.every(function(person2) {
  return currentYear - person2.year >= 19;
});
console.log(isEveryone19orOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentID = comments.find(function(element) {
  return element.id === 823423;
});
console.log(commentID.text);

// Array.prototype.findIndex()
// Find the comment with this ID
const commentIndexID = comments.findIndex(function(element) {
  return element.id === 823423;
});
console.log(commentID.text);
