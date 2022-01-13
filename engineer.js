const employee = require('./employee');

    class engineer extends employee {
    constructor (name, id, email, username){
        super(name, id, email);
            this.username = username;
        }

        getUserName(){
            return this.username;
        }

        getRole() {
            return "Engineer";
        }
    };

    module.exports = engineer;