const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklist.model');

function authUser(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            message:"token not found"
        })
    }

    const isTokenBlacklisted = BlacklistToken.findOne({token}); 

    if(isTokenBlacklisted){
        return res.status(401).json({
            message:"token is blacklisted"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message:"invalid token"
        })
    }
}

module.exports = {
    authUser
};