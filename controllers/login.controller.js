const LoginService = require('../services/login.service');
const jwt = require('jsonwebtoken')

class LoginController {
    loginService = new LoginService()

    Login = async(req, res, next) => {
        const {nickname, password} = req.body;

        const userData = await this.loginService.Login(nickname, password);
        

        // if(!userData ||userData.password !== password){
        //     res.status(412).json({errorMassege : "닉네임 또는 패스워드를 확인해주세요"});
        // };

    
        const token = jwt.sign({userId: userData.userId},"customized-secret-key");
        res.cookie("Authorization", `Bearer ${token}`);
        res.status(200).json({data:userData})
    }
}

module.exports = LoginController