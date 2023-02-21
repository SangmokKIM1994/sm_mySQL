const SignupRepository = require('../repositories/signup.repository');

class signupService {

    signupRepository = new SignupRepository();

    Signup = async(nickname, password) => {
        const signupData = await this.signupRepository.Signup(nickname, password)

        return {
            userId: signupData.null,
            nickname: signupData.nickname,
            password: signupData.password,
            likepost: signupData.null,
            createdAt: signupData.createdAt,
            updatedAt: signupData.updatedAt,
        }
    }

}


module.exports = signupService;