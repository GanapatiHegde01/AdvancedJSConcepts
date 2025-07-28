

// Apply we can use when we want to call some method with different object and and also want 
// Pass the arguement in array or like an object.

// Also We can use call method for the same if we have the parameter is not an object 
// of single paramenter.

// Apply works more or same like ... (Spread operator in js).
//Applies the each element in one at time from the give object to specified function.


rancho = {
    firstName: "Rancho",
    
    greet: function(greeting, task) {
        console.log(this);
        console.log(`${this.firstName} Says ${greeting} and assigns the work ${task}`  )
    }
}
input =  ["Good Morning", "Home Page"];
dev = {
    firstName:"Deva"
}


// Bind method is used to perma-bind the values into the function.
// When we call bind method on some function it will be binded with that object and return a new method(reference) so that if we want to use it future we 
// we can store it in an var and use it. Also we can pass the arguments with it. It will also set as default and baked into that function.

// Example:
// Binding the arugment of a particular function
class Govt{
    calTaxes(taxrate, price){
        return price+ price*taxrate;
    }


}

const UsGovtTax = new Govt();
UsGovtTax.calTaxes.bind(null,0.18);
const CATax = UsGovtTax.calTaxes.bind(null,0.18);
CATax(10000);

// Binding the method to a particular object.
const Person = {

    name: "Ganapati",
    sing:function(){
        console.log(`${this.name} Sings La La La`);
    }
}

const Man = {
    name:"Sarvesh"
}


const ManSings = Person.sing.bind(Man)


