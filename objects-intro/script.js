// objects
// objects are an unordered, keyed collection of any various values.


let emptyObj = {};

// property value / key - value
let objStructure = {
    key1: 'value',
    key2: 'value'
}

const student = {
    firstName: 'Rufus',
    age: 31,
    email: 'rufus@gmail.com',
    hobbies: ['chess', 'reading'],
};

// accessing a value
// dot notation
// console.log(student.email);

// changing a value
// student.age = 32

// adding a value
student.lastName = 'Miller';

// console.log(student.lastName);
// console.log(student);

// use brackets instead of dot notation
// if you wanna use a variable to access

// const input = 'age';
// console.log(student[input]);

// the brackets also work with strings 
// console.log(student['age']);


// properties can also be nested

// const student = {
//     firstName: 'Rufus',
//     age: 31,
//     email: 'rufus@gmail.com',
//     hobbies: ['chess', 'reading'],
//     address: {
//         street: 'Lobeckstr.',
//         zip: 10235
//     }
// };


// console.log(student.address.street);


// console.log(student.age);
// console.log(student.hobbies[0]);

// deleting a property
// delete student.age;

// check if a property exists 
// prop in object
// console.log('firstName' in student);

// console.log(student);

// looping through the object
for (const el in student) {
    // console.log(el) -> gets the key;
    // console.log(student[el]) -> gets the value;
}

// console.log(Object.keys(student));
// console.log(Object.values(student));


const persons = [
    {
        name: 'mary',
        age: 23
    },
    {
        name: 'bob',
        age: 32,
    },
    {
        name: 'alice',
        age: 27
    }
];

for (let person of persons) {
    console.log(person.name);
}