import express, { Request, Response, NextFunction, Router } from 'express';
import {
  createPost,
  showPost,
  showSinglePost,
  deletePost,
  updatePost,
  addComment,
  addLike,
  removeLike,
} from '../controllers/postController';
import { isAuthenticated, isAdmin } from '../middleware/auth';
import multer from '../middleware/multer';

const router: Router = express.Router();

// Blog routes

// POST /api/post/create
router.post('/post/create', isAuthenticated, isAdmin, multer.single('image'), createPost);

// GET /api/posts/show
router.get('/posts/show', showPost);

// GET /api/post/:id
router.get('/post/:id', showSinglePost);

// DELETE /api/delete/post/:id
router.delete('/delete/post/:id', isAuthenticated, isAdmin, deletePost);

// PUT /api/update/post/:id
router.put('/update/post/:id', isAuthenticated, isAdmin, updatePost);

// PUT /api/comment/post/:id
router.put('/comment/post/:id', isAuthenticated, addComment);

// PUT /api/addlike/post/:id
router.put('/addlike/post/:id', isAuthenticated, addLike);

// PUT /api/removelike/post/:id
router.put('/removelike/post/:id', isAuthenticated, removeLike);

export default router;