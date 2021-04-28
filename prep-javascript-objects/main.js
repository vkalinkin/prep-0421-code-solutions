var person = { firstName: 'Victor', lastName: 'Kalinkin', hobby: 'Lego' };
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);
person.job = 'Developer-in-training';
console.log("The person's current job is: " + person.job);
person.previousJob = 'Quality Assurance Tester';
console.log("The person's previous job is: " + person.previousJob);
console.log(person);

var myCar = { make: 'Honda', model: 'Accord', year: '2013' };
console.log(myCar);
myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');
myCar['color'] = 'Beige';
console.log(myCar);
