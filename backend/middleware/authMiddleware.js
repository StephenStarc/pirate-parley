import jwt  from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//Protect routes
export const protect = asyncHandler(async (req, res, next) => {
    let token;
    //Read the JWT from cookies
    token = req.cookies.jwt

    if(token){
        try{
            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Get user from the token
            // Setting it for res.user so we can access anywhere
            req.user = await User.findById(decoded.userId).select('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }else{
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

//Admin Middleware
export const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}