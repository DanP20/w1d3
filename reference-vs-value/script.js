function prefix(input) {
    // this is not enough 
    // const copy = input;
    // const copy = input.slice();
    const copy = [...input];
    for (let i = 0; i < copy.length; i++) {
        copy[i] = 'Mr ' + copy[i]
    }
    return copy
}

const beatles = ['John', 'Paul', 'George', 'Ringo'];

const prefixedBeatles = prefix(beatles);

// console.log(prefixedBeatles);

// console.log(beatles);

// let name = 'Jack';
// let copy = name;
// copy = 'Alice';
// console.log(name);

const ar1 = ['a', 'b'];
const ar2 = ['a', 'b'];
// console.log(ar1 == ar2);

// console.log(JSON.stringify(ar1) === JSON.stringify(ar2));

// using JSON parse and stringify
// const person1 = { name: 'joe' };

// const copy = JSON.parse(JSON.stringify(person1))

// copy.age = 34;

// console.log(person1);

const person = { name: 'John', email: 'j@gmail.com' };

// person.age = 34;

// const personWithAge = person;

// delete person.age;

const personWithAge = { ...person, age: 34 }

console.log(personWithAge);

