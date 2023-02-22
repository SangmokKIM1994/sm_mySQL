const {users} = require('../models');

class LoginRepository {

    Login = async (nickname,password) => {
        console.log(nickname)
        const find = await users.findOne({where: {nickname:nickname,password:password}});
        
        // console.log(find)

        return find
    }
}

module.exports = LoginRepository