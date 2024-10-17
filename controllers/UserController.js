import db from '../config/db.js';

// Hiển thị danh sách người dùng
export const getUsers = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM users');
    res.render('users', { users: rows });
};

// Hiển thị chi tiết người dùng
export const getUserById = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    res.render('userDetails', { user: rows[0] });
};

// Cập nhật thông tin người dùng
export const updateUser = async (req, res) => {
    const { fullname, address, sex, email } = req.body;
    await db.query('UPDATE users SET fullname = ?, address = ?, sex = ?, email = ? WHERE id = ?', 
                   [fullname, address, sex, email, req.params.id]);
    res.redirect('/users');
};

// Xóa người dùng
export const deleteUser = async (req, res) => {
    await db.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    res.redirect('/users');
};

// Thêm người dùng mới
export const createUser = async (req, res) => {
    const { username, password, fullname, address, sex, email } = req.body;
    await db.query('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)', 
                   [username, password, fullname, address, sex, email]);
    res.redirect('/users');
};
