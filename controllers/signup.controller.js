const SignupService = require("../services/signup.service");

class SignupController{
    SignupService = new SignupService();

    Signup = async (req, res, next) => {
        const {nickname, password, confirm} = req.body;

        const signupDate = await this.SignupService.Signup(nickname,password);
        
        
        res.status(201).json({date : signupDate});
    } 
}

module.exports = SignupController