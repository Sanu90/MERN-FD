// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         console.log(`${this.name} barks`);
//     }
// }

// const p=new Person('dog');
// p.greet()

class A {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(`hey i'm ${this.name}`);
  }
}

class B extends A{
    constructor(name){
        super(name)
    }
    display1(){
        super.display();
        console.log(`${this.name}--->>`);
    }
}

const a=new A('Hisham');

a.display1()
