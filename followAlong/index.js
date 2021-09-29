// const obj = {
//     name: 'jacob',
//     age: 30
// }

// const obj = {

// }



// obj = {
//     name: 'james',
//     age: 30
// }

// console.log(obj);

// obj.name = 'james'

// console.log(obj);

class Person {
    name;
    constructor() {
        console.log('hello the constructor ran');
    }

    sayHello() {
        console.log('hello');
        console.log(this.name);
    }
}

const personOne = new Person();
personOne.name = 'jacob';
personOne.sayHello();


