const ganu = {
    name:"Ganapati",
    greet:function(){
        console.log(this);
        console.log(`${this.name} Says good Morning!!`);
    }
}

const btn = document.querySelector('#clickMe');
btn.addEventListener("click", ganu.greet.bind(ganu));

// Notes

/*  
We can use bind method with event listener because if we use this keyword in the function and 
if we use that with the event listeners it will not work because this points to that current 
Object.

So If use bind to bind the function  with object we want to get the result when the particular event is triggered.


We can't use call method because it will bind and call that method instantly. We want it be triggered for 
perticular event. So bind will bind the method with perticular object and returns the new function.

*/ 


