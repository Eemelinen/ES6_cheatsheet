//
// Write the ES5 code in modern JavaScript
//

// =============================================== //

// 1 
// make into arrow function

    // function hello() {
    //     console.log('Hello, World!');
    // }

const hello = () => {
    console.log('Hello, World!');
}

hello(); // test

// =============================================== //

// 2
// make into arrow function

    // function sayHi(name) {
    //     console.log('Hi ' + name + '!');
    // }

const sayHi = (name) => {
    console.log('Hi ' + name + '!');
}

sayHi('Teppo'); // test

// =============================================== //

// 3
// make into arrow function

    // function multiplyByTen(a) {
    //     return a * 10;
    // }

const multiplyByTen = a => {
    return a * 10;
}

console.log(multiplyByTen(10)); // test

// =============================================== //

// 4
// make into arrow function

    // function sum(a, b) {
    //     return a + b;
    // }

const sum = (a, b) => {
    return a + b;
}

console.log(sum(12,34)); // test

// =============================================== //

// 5
// make into arrow function

    // function power(base, exponent) {

const power = (base, exponent) => {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 16)); // test

// =============================================== //

// 6 (object destructuring)
// assign object properties into separate variables

var	person	=	{		
    firstName: 'Tom',
    lastName: 'Cruise',
    actor:	true,
    age:	57
}

    // var firstname = person.firstName;
    // var lastname = person.lastName;
    // var actor = person.actor;
    // var age = person.age;

var { firstName } = person;
var { lastName } = person;
var { actor } = person;
var { age } = person;

console.log(firstName, lastName, actor, age); // test

// =============================================== //

// 7 (property initializer shorthand)
// set object properties from variables
var name = 'result';
var value = 42;

    // var data = {
    //     name: name,
    //     value: value
    // }

var data = {
    name,
    value
}

console.log(data); // test

// 8 (spread operator)
// combine arrays into a new array
var array1 = ['one', 'two'];
var array2 = ['three', 'four']

    // var array3 = array1.concat(array2);
const array3 = [...array1, ...array2]

console.log(array3); // test

// =============================================== //

// 9 (spread operator)
// split string into array of characters
var str = 'foobar';

    // for (var i = 0; i < str.length; i++) {
    //     arr[i] = str[i];
    // }

var arr = [...str];

console.log(arr); // test

// =============================================== //

// 10 (array destructuring assignment)
// define separate variables and assign values from an array

var arrayOfItems = ['apple', 3];

    // var item = arrayOfItems[0];
    // var amount = arrayOfItems[1];

const [ item, amount ] = arrayOfItems;

console.log(item, amount); // test

// =============================================== //

// 11 (object destructuring assignment)
var lessKnownPerson = {
    firstname: 'John',
    lastname: 'Doe'
};

    // var firstName = lessKnownPerson.firstName;
    // var lastName = lessKnownPerson.lastName; 

const { firstname, lastname } = lessKnownPerson;

console.log(firstname, lastname);

// =============================================== //

// 12 (rest parameters)
var entity = {
    id: 723647,
    name: 'Tom Cruise',
    age: 57
};

    // var restOfProps = { name: entity.name, age: entity, age };

var id = entity.id;
var restOfProps = {...entity}

console.log(id, restOfProps);

// =============================================== //

/* Program output:
1 Hello, World!
2 Hi Teppo!
3 100
4 46
5 65536
6 Tom Cruise true 57
7 { name: 'result', value: 42 }
8 [ 'one', 'two', 'three', 'four' ]
9 [ 'f', 'o', 'o', 'b', 'a', 'r' ]
10 apple 3
11 John Doe
12 723647 { name: 'Tom Cruise', age: 57 }
*/






