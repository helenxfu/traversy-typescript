interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  register() {
    throw new Error("Method not implemented.");
  }
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
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
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(1, "Mike Smith", "dgg@dgfgdgdf.dggd", 33);
mike.payInvoice();

let john = new User("john doe", "jdoe33@ddfdf.fddf", 33);
