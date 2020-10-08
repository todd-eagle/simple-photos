class Auth {
    constructor(){
        this.authenticated = localStorage.getItem("localAuth");
    }

    checkAuth(authVal){
        if(authVal){
            this.authenticated = true
            return true
        }else{
            this.authenticated = false
            return false
        }   
    }
  
    isLoggedIn(boolVal) {
        this.authenticated = boolVal
    }
}

export default new Auth()