import User from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => { 
    
    try {
        const {
            firstName, 
            lastName, 
            email, 
            password
        } = req.body;
    
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
        })
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (e) {
        res.status(500).json(e);
    }
};

export const login = async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
        res.send("user logged in");
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};