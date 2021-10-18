'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Bashkatov';

    say = () => {
        console.log(`Hello user: ${this.name} ${this.surname}, your age is ${this._age}`);
    }

    get age() {
        return this._age;
    };

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('WRONG VALUE!');
        }
    };
}

const anatoly = new User('Anatoly', 32);
console.log(anatoly.age);
anatoly._age = 34;
anatoly.say();
