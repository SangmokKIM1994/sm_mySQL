const { users } = require("../models")

class signupRepository {

    Signup = async ( nickname, password, createdAt, updatedAt) => {

        const signup = await users.create({ nickname, password, createdAt, updatedAt})

        return signup
    }
}

module.exports = signupRepository
