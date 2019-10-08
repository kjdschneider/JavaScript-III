/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - when 'this' is declared on the global level. It references the 'window' or the 'console', essentially referring to what it is that makes up JS
* 2. Implicit binding - when used within another context in an object (a function for example). If using dot notation, it always refers to the object to the left of the dot.
* 3. New binding - when used with a constructor and the 'new' keyword, it refers to the new object that is created with the constructor.
* 4. Explicit binding - when .bind, .call, or .apply is used to intentionally bind the 'this' keyword to some object in particular.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const exObj = {
    name: 'object',
    type: 'example',
    speak: function(){
        return `${this.name} ${this.type}`;
    }
}

console.log(exObj.speak());

// Principle 3

// code example for New Binding
function Clothes (attrs){
    this.type = attrs.type;
    this.size = attrs.size;
    this.fabric = attrs.fabric;    //each time the 'this' keyword is used here, it will refer to the new 
}

const shirt = new Clothes ({       //object that is created down here
    type: 'Shirt',
    size: 'Large',
    fabric: 'Cotton'
});

// Principle 4

// code example for Explicit Binding
const obj1 = {
    name: 'KJ',
    birthYear: 1995
}

const obj2 = {
    name: 'Bobby',
    birthYear: 1863
}

function introduction (){
    console.log(`Hi! My name is ${this.name} and I was born in the year ${this.birthYear}`);
}

introduction.call(obj1);