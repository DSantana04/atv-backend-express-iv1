import userService from '../services/user.services.js';

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email and password are required!' });
        }

        await userService.registerUser({ username, email, password });
        return res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Register error:', error);
        return res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email and password are required!' });
        }

        const token = await userService.loginUser({ username, email, password });
        return res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: error.message });
    }
};

export default { register, login };