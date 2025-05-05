import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const registerUser = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Username already exists!');
    }
    if (existingEmail) {
        throw new Error('Email already exists!');
    }
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (!validateEmail(email)) {
        throw new Error('Invalid email format!');
    } 

    const isValidPassword = (password) => {
        // Exemplo: mínimo 8 caracteres, pelo menos 1 letra e 1 número
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    };
    
    if (!isValidPassword(password)) {
        throw new Error('Password must be at least 8 characters long and include at least one letter and one number.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        username,
        email,
        password: hashedPassword
    });
};

const loginUser = async ({ username, password }) => {
    const user = await User.findOne({ username }).select('+password email');
    if (!user) throw new Error('User not found!');

    if (!user) {
        throw new Error('User not found!');
    }

    if (user.email !== email) {
        throw new Error('Email does not match the registered user!');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials!');

    const token = jwt.sign(
        { id: user._id, username: user.username, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};


export default { registerUser, loginUser };