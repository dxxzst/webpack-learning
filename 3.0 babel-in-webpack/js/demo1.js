//console.log('demo1 log');

export default class User {
    constructor(userName, email) {
        this._userName = userName;
        this._email = email;
    }

    changeEmail(newEmail) {
        this._email = newEmail;
    }

    static register(...args) {
        return new User(...args);
    }

    get info() {
        return this._userName + ' ' + this._email;
    }

    get name() {
        return this._userName;
    }
    set name(name) {
        this._userName = name.slice(0, 1).toUpperCase().concat(name.slice(1));
    }
}