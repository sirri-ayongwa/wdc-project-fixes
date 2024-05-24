const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile, allusersadmin, getUser, getProfile } = require('../controllers/authController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

//auth routes
// /api/users/signup
router.post('/signup', signup);
// /api/users/signin
router.post('/signin', signin);
// /api/users/logout
router.get('/logout', logout);
// /api/users/getusers
router.get("/users", isAuthenticated, isAdmin, allusersadmin);
// /api/users/getuser
router.get("/single/:id", isAuthenticated, isAdmin, getUser);
// /api/users/getprofile
router.get("/profile/:id", getProfile);
// /api/users/me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;