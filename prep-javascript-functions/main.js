function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(2, 2);
console.log('Result of addTwoNumbers: ', sum);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}
var minutes = convertHoursToMinutes(2);
console.log('Result of convertHoursToMinutes: ', minutes);

function getGreeting(name) {
  return ('Hello ' + name + '!');
}
var greetingResult = getGreeting('World');
console.log('Result of getGreeting: ', greetingResult);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}
var addAndMultiplyResult = addAndMultiplyBy5(10, 5);
console.log('Reult of add addAndMultiplyBy5: ' + addAndMultiplyResult);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var difference = subtractTwoNumbers(22, 7);
console.log('Result of subtractTwoNumbers: ' + difference);

function getCircleCircumference(radius) {
  return (radius * 2 * 3.14159);
}
var circumference = getCircleCircumference(5);
console.log('Circumference of Circle: ' + circumference);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name: ', fullName);

function cube(number) {
  return (number * number);
}
var cubedNumber = cube(5);
console.log('Cube result: ', cubedNumber);
