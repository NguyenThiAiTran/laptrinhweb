// index.js
import express from 'express';
import db from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js'; // Đảm bảo tệp này cũng tồn tại

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Cấu hình để phục vụ các file tĩnh từ thư mục "public"

// Đăng ký các route
app.use('/auth', authRoutes);
app.use('/users', userRoutes); // Đảm bảo userRoutes.js cũng đã được định nghĩa

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
