const LoginRepository = require('../repositories/login.repository');



class LoginService {
    loginRepository = new LoginRepository();
//nickname 함수의 파라미터
    Login = async (nickname,password) => {
        const findSameId = await this.loginRepository.Login(nickname,password);
        // console.log(findSameId)
        return findSameId
    };

};

module.exports = LoginService