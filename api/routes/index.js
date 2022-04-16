const express = require('express')
const router = express.Router()

// Controller
const IndexController = require('../controllers/IndexController')
const UserController = require('../controllers/UserController')
// const UserInfoController = require('../controllers/UserInfoController')

// Index Controller
router.get('/', IndexController.index)

// User Controller
router.get('/User', UserController.index)
// router.get('/UserInfo', UserInfoController.index)

module.exports = router