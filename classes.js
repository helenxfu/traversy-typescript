class User {
    register() {
        throw new Error("Method not implemented.");
    }
    constructor(name, email, age) {
        this.name = name;
        email;
        age;
        console.log("user created " + this.name);
    }
    payInvoice() {
        console.log(this.name);
    }
}
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let mike = new Member(1, "Mike Smith", "dgg@dgfgdgdf.dggd", 33);
mike.payInvoice();
let john = new User("john doe", "jdoe33@ddfdf.fddf", 33);
