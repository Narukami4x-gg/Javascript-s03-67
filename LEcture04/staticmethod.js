class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce(){
        console.log("This is " + this._name + " !");
    }

    // a static method
    static bark(){
        console.log("Woof!");
    }
}

const myDog = new Dog("buster");
myDog.introduce();

//calling static Method
Dog.bark();