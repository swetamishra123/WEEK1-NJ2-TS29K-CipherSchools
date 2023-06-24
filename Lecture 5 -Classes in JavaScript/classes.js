let person = {
    name: "John",
    email: "john@wick.com",
    age: 45,
    count: 0,
    status: true,
    array: ["reading", "writing", 10, null, true],
    login: function () {
      console.log("login", this);
    },
    logout: () => {
      console.log("logout", this);
    },
    nameFunction() {
      return this.name;
    },
    updateCount() {
      this.count++;
    },
  };
  
  person.login();
  person.logout();
  console.log("outside", this);