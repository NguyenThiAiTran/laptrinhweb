import express from 'express';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine.js';
import webRoute from './routes/webRoute.js'; // Import router

const app = express();
viewEngine(app);  // Cấu hình view engine EJS

const port = process.env.PORT || 3000; // Sử dụng PORT từ .env hoặc mặc định là 3000
// Cấu hình Express để phục vụ tài nguyên tĩnh từ thư mục 'public'
app.use(express.static('public'));

app.use(webRoute); // Sử dụng router

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
