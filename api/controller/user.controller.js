import bcrypt, { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const register = async (req, res) => {
    console.log("Registering user:", req.body);

    if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    const { username, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const savedUser = await User.create({
            username,
            email,
            password: hashedPassword
        });
        console.log('Saved user:', savedUser);
        res.status(200).json({message: 'User registered successfully!'});
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: `Error saving user: ${error}` });
    }
};

const login = async (req, res) => {
    console.log("Logging in user:", req.body);

    if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: 'Username and password are required!' });
    }

    const { username, password, email } = req.body;

    try {
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(400).json({ message: 'User not found!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }
        console.log("User logged in successfully:", user.username);
        
        if(!email) {
            return res.status(400).json({ message: 'Email is required!' });
        }
    
        // Optionally, you can generate a JWT token here and send it back to the client
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.status(200).json({ token, user });
        // For now, just return the user object
        // Note: In a real application, you should not send the password hash back to the client

        console.log("User logged in successfully:", user.username);
        const token  = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ message: `Error logging in user: ${error}` });
    }
};

export default { register, login };
