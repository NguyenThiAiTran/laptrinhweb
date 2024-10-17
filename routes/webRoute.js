import express from 'express';
import * as HomeController from '../controllers/HomeController.js'; // Sử dụng import đúng cách
import * as AboutController from '../controllers/AboutController.js'; // Sử dụng import đúng cách
import * as ContactController from '../controllers/ContactController.js'; // Sử dụng import đúng cách
import * as UserController from '../controllers/UserController.js'; // Sử dụng import đúng cách

const router = express.Router();

router.get('/', HomeController.getHome);           // Route path: /
router.get('/about', AboutController.getAbout);    // Route path: /about
router.get('/contact', ContactController.getContact); // Route path: /contact

// Routes xử lý người dùng
router.get('/users', UserController.getUsers);                // Hiển thị danh sách người dùng
router.get('/users/:id', UserController.getUserById);         // Xem chi tiết người dùng
router.post('/users/add', UserController.createUser);         // Thêm người dùng mới
router.post('/users/edit/:id', UserController.updateUser);    // Sửa người dùng
router.get('/users/delete/:id', UserController.deleteUser);   // Xóa người dùng

export default router;
