const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const BlacklistToken = require('../models/blacklist.model');

async function userRegisterController(req, res) {
    const { username,email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const isUserAlreadyExsist = await userModel.findOne({
        $or: [{ username }, { email }],
    })

    if(isUserAlreadyExsist){
        return res.status(400).json({
            message:"user already exsist"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
    });

   const token = jwt.sign(
    { id: user._id },
     process.env.JWT_SECRET,
     { expiresIn: '1d' }
   );

   res.cookie("token",token)

   res.status(201).json({
    message:"user registerd successfully",
    user:{
        username:user.username,
        email:user.email,
        id:user._id
    }
   })
}

async function userLoginController(req,res){
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message:"all fields are required"
        })
    }

    const user = await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"invalid credentials"
        })
    }   

    const token = jwt.sign(
        { id: user._id },
         process.env.JWT_SECRET,
         { expiresIn: '1d' }
       );   

       res.cookie("token",token)

       res.status(200).json({
        message:"user logged in successfully",
        user:{
            username:user.username,
            email:user.email,
            id:user._id
        }
       })


}

async function userLogoutController(req,res){

    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            message:"token not found"
        })
    }

    if(token){
        await BlacklistToken.create({token});   
    }

    res.clearCookie("token");

    res.status(200).json({
        message:"user logged out successfully"
    })
}

async function getMeController(req,res){
    const userId = req.user.id;
    const user = await userModel.findById(userId).select("-password");
    res.status(200).json({ 
        message:"user fetched successfully",
        user:{
            username:user.username,
            email:user.email,
            id:user._id
        } });
}

module.exports = {
    userRegisterController,
    userLoginController,
    userLogoutController,
    getMeController
};