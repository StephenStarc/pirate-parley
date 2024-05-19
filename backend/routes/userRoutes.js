import express from 'express'
import {     authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser} from '../controllers/usersController.js'

import {protect, admin} from '../middleware/authMiddleware.js'
    const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers) //getUsers admin Route
router.post('/logout', logoutUser)
router.post('/auth', authUser)
router.route('/profile').post(protect, updateUserProfile).get(protect, getUserProfile) //admin Routes
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router