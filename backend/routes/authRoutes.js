const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile, allusersadmin, getUser, getProfile, completeProfile, updateProfile, completeCompanyProfile } = require('../controllers/authController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

//auth routes
// /api/users/signup
router.post('/signup', signup);
// /api/users/signin
router.post('/signin', signin);
// /api/users/complete-profile
router.post("/complete/profile/:id", completeProfile)
router.post("/complete/company/:id", completeCompanyProfile)

// /api/users/update-profile
router.put("/update/profile/:id", updateProfile)
// /api/users/logout
router.get('/logout', logout);
// /api/users/getusers
// TODO: SECURITY -> ADD IS isAdmin middleware for more security
router.get("/users",allusersadmin);
// /api/users/getuser
router.get("/single/:id", getUser);
// /api/users/getprofile
router.get("/profile/:id", getProfile);
// /api/users/me
router.get('/me/:id', userProfile);

module.exports = router;