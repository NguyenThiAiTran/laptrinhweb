// routes/userRoutes.js
import express from 'express';
import db from '../config/db.js'; // Điều chỉnh đường dẫn nếu cần

const router = express.Router();

// Lấy danh sách người dùng
router.get('/', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM users'); // Sử dụng async/await
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lấy thông tin người dùng theo ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Xuất router như một giá trị mặc định
export default router;
