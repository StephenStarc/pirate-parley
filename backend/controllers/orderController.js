import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

// @desc   Create new Order
// @route  Post /api/orders
// @access Private
const addOrder = asyncHandler( async (req,res) => {
    res.send('Add Order')
})

// @desc   Get logged in user orders
// @route  GET /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler( async (req,res) => {
    res.send('Get my Order')
})


// @desc   Get Order By ID
// @route  Get /api/orders/:id
// @access Private
const getOrderById = asyncHandler( async (req,res) => {
    res.send('Get OrderById')
})



// @desc   Update Order to Paid
// @route  Get /api/orders/:id/pay
// @access Private/Admin
const updateOrderToPaid = asyncHandler( async (req,res) => {
    res.send('Update Order to Paid')
})

// @desc   Update Order to Delivered
// @route  Get /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler( async (req,res) => {
    res.send('Update Order to Delivered')
})

// @desc   Get all Orders
// @route  Get /api/orders
// @access Private/Admin
const getOrders = asyncHandler( async (req,res) => {
    res.send('Get Orders')
})
export {addOrder, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders}