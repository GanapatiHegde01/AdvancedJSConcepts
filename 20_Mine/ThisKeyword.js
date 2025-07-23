

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


