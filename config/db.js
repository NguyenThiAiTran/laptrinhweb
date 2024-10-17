import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',          // Tên người dùng mặc định trong XAMPP là 'root'
    password: '',          // Mật khẩu mặc định là trống
    database: 'ltw', // Tên cơ sở dữ liệu bạn đã tạo
});

export default db;
