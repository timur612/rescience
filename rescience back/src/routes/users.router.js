const router = require('express-promise-router')();

const usersController = require('../controllers/user.controller');

router.post('/users', usersController.createUser);
router.post('/users/login', usersController.logInUser);

router.get('/users/:id', usersController.getUser);

module.exports = router;