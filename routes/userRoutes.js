const express = require('express');
const router = express.Router();

const { addUser, authUser } = require("../controllers/userController");
const {addTask,Searchtask} = require("../controllers/taskController")
const Authenticate = require("../middlewares/authenticate");
const isAdmin = require("../middlewares/isAdmin");
const postAuthenticate = require('../middlewares/postAuthenticate');
const AuthAdmin = require('../middlewares/authAdmin');

router.route('/register').post(isAdmin, addUser);
router.route('/login').post(authUser);
router.route('/task').post(postAuthenticate,addTask);
router.route('/search').get(postAuthenticate,Searchtask);
module.exports = router;