import express from 'express';
import {fbFrndRequest, fetchAllFbUsers, saveUserChats, saveChatbotChats } from '../controllers/authFunction.js'
import { login, signup } from '../controllers/auth.js'
import { getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)
router.patch('/saveuserchats', saveUserChats)
router.patch('/savechats', saveChatbotChats)
router.patch('/fbReqBtn', fbFrndRequest)
router.get('/fbReqBtn', fetchAllFbUsers)
export default router