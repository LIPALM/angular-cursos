

export class Person {
    
    // public name: string;
    // public age: number;
    // private address: string;
    constructor(
        public firstname: string,
        public lastaname: string,
        private address: string = 'not specified'
    ) {}
}

//  export class Hero extends Person {
//      constructor(
//          public alterEgo: string,
//          public age: number,
//          public realName: string
//      ){
//          super( realName, 'New York, USA' );
//      }
//  }

export class Hero {
    
    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}

const person = new Person('Tony Stark', 'New York, USA');
const ironman = new Hero('Ironman', 45, 'Tony Stark',person);
console.log(ironman);