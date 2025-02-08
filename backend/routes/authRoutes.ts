import express from 'express';
import { signup, signin, logout, userProfile, allUsersAdmin, getUser, getProfile, completeProfile, updateProfile, completeCompanyProfile } from '../controllers/authController';
import { isAuthenticated, isAdmin } from '../middleware/auth';

const router = express.Router();
//auth routes
// /api/users/signup
router.post('/signup', signup);
// /api/users/signin
router.post('/signin', signin);
// /api/users/complete-profile
router.post("/complete/profile", isAuthenticated, completeProfile);
router.post("/complete/company/:id", isAuthenticated, completeCompanyProfile);
// /api/users/update-profile
router.put("/update/profile/:id", updateProfile);
// /api/users/logout
router.get('/logout', logout);
// /api/users/getusers
// TODO: SECURITY -> ADD IS isAdmin middleware for more security
router.get("/users",allUsersAdmin);
// /api/users/getuser
router.get("/single/:id", getUser);
// /api/users/getprofile
router.get("/profile/:id", getProfile);
// /api/users/me
router.get('/me/:id', userProfile);

export default router;