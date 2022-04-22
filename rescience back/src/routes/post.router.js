const router = require('express-promise-router')();

const postsController = require('../controllers/post.controller');


router.post('/posts', postsController.createPost);

router.get('/posts', postsController.allPosts);
router.get('/posts/:id',postsController.getPost);

module.exports = router;