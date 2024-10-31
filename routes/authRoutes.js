// routes/authRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../config/db.js'; // Điều chỉnh đường dẫn nếu cần

const router = express.Router();

// Đăng ký
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
        [username, hashedPassword, role || 'user'],
        (error, results) => {
            if (error) return res.status(500).json({ error });
            res.status(201).json({ message: 'User registered successfully' });
        }
    );
});

// Đăng nhập
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        async (error, results) => {
            if (error || results.length === 0) return res.status(401).json({ message: 'User not found' });
            
            const user = results[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);
            
            if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        }
    );
});

// Xuất router như một giá trị mặc định
export default router;
