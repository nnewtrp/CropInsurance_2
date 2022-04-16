const express = require('express')
const router = express.Router()

// Index Controller
const IndexController = require('../controllers/IndexController')

// User Controller
const UserController = require('../controllers/UserController')
const UserInfoController = require('../controllers/UserInfoController')
const ReportController = require('../controllers/ReportController')

// Index Controller
router.get('/', IndexController.index)

// User Controller
router.get('/User', UserController.index)
router.get('/UserInfo', UserInfoController.index)
router.get('/Report', ReportController.index)

module.exports = router