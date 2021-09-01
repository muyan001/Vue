var person = {
    firstName: "Bill",
    lastName: "Gates",
    id: 678,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};