const people = ["Arron","Mel",["John"]];
const one = 1;
const str = "Hello world";
const b = true;
const employee = {
    firstname: "Pattarapol",
    lastname: "Kraitong",
};

function sayHello(person) {
    console.log("Hello "+ person.firstname);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array); 
sayHello (employee);