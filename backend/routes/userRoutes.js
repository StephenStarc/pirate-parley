import express from 'express'
import {     authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    UpdateUserProfile,
    getUsers,
    getUserById,
    deleteUsers,
    updateUsers} from '../controllers/usersController.js'
const router = express.Router()

router.route('/').post(registerUser).get(getUsers) //getUsers admin Route
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').post(UpdateUserProfile).get(getUserProfile) //admin Routes
router.route('/:id').delete(deleteUsers).get(getUserById).put(updateUsers)

export default router