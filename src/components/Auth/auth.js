class Auth {
    constructor(){
        this.authenticated = false;
    }

    isLoggedIn(boolVal) {
        this.authenticated = boolVal
    }
}

export default new Auth()