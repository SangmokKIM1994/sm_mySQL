const {users} = require('../models');

class LoginRepository {

    Login = async (nickname,password) => {
        
        const find = await users.findOne({where: {nickname:nickname,password:password}});

        return find
    }
}

module.exports = LoginRepository