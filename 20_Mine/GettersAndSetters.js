class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    set fullname(name) {
        const [first,last] = name.split(" ");
        this.firstname = first;
        this.lastname = last;
        
    }

    get name() {
        return `First name: ${this.firstname}  Last Name:${this.lastname}`;
    }
}