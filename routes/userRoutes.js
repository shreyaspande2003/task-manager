const express = require('express');
const router = express.Router();

const { addUser, authUser } = require("../controllers/userController");
router.route('/register').post(addUser);

module.exports = router;