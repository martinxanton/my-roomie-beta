import User from "../models/user.js";

export const register = async (req, res) => { 
    
    try {
        const {
            firstName, 
            lastName, 
            email, 
            password
        } = req.body;
    
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
        })
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (e) {
        res.status(500).json(e);
    }
};
export const login = async (req, res) => { 
    try {
        const {
            email, 
            password
        } = req.body;

        
    } catch (error) {
        
    }
};