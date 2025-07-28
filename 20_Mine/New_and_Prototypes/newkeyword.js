// class Dog{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }

//     bark(){
//         return `${this.name} is barking`;
//     }
//     sleep(){
//         return `${this.name} is Sleeping`;
//     }
// }

// New Keyword

// When new keyword is called on specific class it does the 4 things
/*
1. Creates a new empty object
2. Sets a keyword this to be that object.
3. Returns the object - returns this
4. Creates a link to the objects prototype.
*/ 

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;

//   this.bark = function () {
//     return `${this.name} is barking`;
//   };
//   this.sleep = function () {
//     return `${this.name} is Sleeping`;
//   };
// }

/* 
So basically main differenc between above methods to create the object is that 
1. Using class it will on keep the variables unique to each object and  uses common method
so obj1 == obj2

2. Using function(consturctor) it will keep the separate copy of methods and varibles for each object.

*/ 

// To make it as common methods we can do like below
// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }
// Dog.prototype.bark = function(){
//      return `${this.name} is barking`;
// }
// Dog.prototype.sleep = function(){
//      return `${this.name} is Sleeping`;
// }



// myObj = {
//     name:"Ganu",
//     age:23,
//     greet:function(){
//         console.log("Good Morning");
//     }
// }

// myObj.__proto__

/*
Every Object literal in js has access to method called __proto__ which conatains some 
basic methods and all the data wrapped with that object.

*/ 

// Pointing to consturctor.

/*
Imp take-aways

1. Every function has a property on it called prototype
2. The prototype object has the property constructor which points back to the function inself.
3. When  new keyword is used to invoke a function a link between object created from new and the prototype object is established.
    
*/


/*
Prototype Chaining:
In JavaScript, a prototype is like a template object that other objects can inherit properties and methods from.

When you create an object or a function, JavaScript automatically gives it a prototype,
 which can be used to share common features (like functions) across many objects without repeating the code.
Prototype = Shared space for common code.

Saves memory — write once, share across objects.

Think of it as a hidden link between objects.

    We can chain the methods or objects using prototype chaining so if the method available in some other object as well,
    we can access by chaining it.

    For ex
*/ 

// const Dog = {
//     name:"tom",
//     greet:function(){
//         console.log("Hello I am a doggy");
//     }
// }

// const Cow = {
//     name:"Gowri",
//     __proto__:Dog
// }

// const Cat = {
//     name:"Belli",
//     __proto__:Cow
// }

/*
Inheritance:
   Inteheriting the properties from parent class to clild...
   while search for the specific functions it look through prototype chaining..  
    
*/ 
class Dog{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log("Dog is barking");
    }
}

class Doggy extends Dog {
    constructor(name){
        this.name = name;

    }

}


/*
Object.create(object1)

It creates a new object with the prototype which contains the properties of object1.

*/ 