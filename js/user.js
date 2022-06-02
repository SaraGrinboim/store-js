class User {
    #_id;
    #email;
    #password;
    #firstName;
    #lastName;
    #isManagment
    constructor(id, firstName, lastName, email, password, isManagment) {
        this.#_id = id;
        this.#email = email;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#isManagment = isManagment
    }
    toJSON() {
        return {
            id: this.#_id, firstName: this.#firstName, lastName: this.#lastName,
            email: this.#email, password: this.#password, isManagment: this.#isManagment
        };
    };
    get getId() {
        return this.#_id;
    }
    set setId(id) {
        this.#_id = id
    }
    get getFirstName() {
        return this.#firstName;
    }
    set setFirstName(fName) {
        this.#firstName = fName
    }
    get getLastName() {
        return this.#lastName;
    }
    set setLastName(lName) {
        this.#lastName = lName
    }
    get getEmail() {
        return this.#email;
    }
    set setEmail(email) {
        this.#email = email
    }
    get getPassword() {
        return this.#password;
    }
    set setPassword(password) {
        this.#password = password
    }

} 