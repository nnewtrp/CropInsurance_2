const express = require('express')
const router = express.Router()

// Index Controller
const IndexController = require('../controllers/IndexController')

// User Controller
const UserController = require('../controllers/UserController')
const UserInfoController = require('../controllers/UserInfoController')
const ReportController = require('../controllers/ReportController')
const CommentController = require('../controllers/CommentController')
const ResultController = require('../controllers/ResultController')

// Index Controller
router.get('/', IndexController.index)

// User Controller
router.get('/User', UserController.index)
router.get('/UserInfo', UserInfoController.index)
router.get('/Report', ReportController.index)
router.get('/Comment', CommentController.index)
router.get('/Result', ResultController.index)

module.exports = router